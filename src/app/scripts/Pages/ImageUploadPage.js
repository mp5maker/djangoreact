import { Component } from 'react'
import DropZone from 'react-dropzone'
import ReactCrop from 'react-image-crop';

class ImageUploadPage extends Component {
    constructor(props) {
        super(props)
        this.handleOnDrop = this.handleOnDrop.bind(this)
        this.handleOnCropChange = this.handleOnCropChange.bind(this)
        this.handleOnCropComplete = this.handleOnCropComplete.bind(this)
        this.handleImageLoaded = this.handleImageLoaded.bind(this)
        this.handleDownloadImage = this.handleDownloadImage.bind(this)
        this.handleSimpleFileSelect = this.handleSimpleFileSelect.bind(this)
        this.imageSize = 50 * 1024
        this.acceptedFileTypes = ['image/x-png', 'image/png', 'image/jpg', 'image/jpeg', 'image/gif']
        this.state = {
            imageSource: null,
            cropImageSource: "",
            cropOptions: {
                aspect: 1/1
            },
            croppedImage: "",
            pixelCrop: "",
            base64Image: "",
            simpleImageSource: null,
        }
    }

    validateFile(files, type) {
        if (files && files.length > 0) {
            const file = files[0]
            const fileType = file.type
            const fileSize = file.size
            if (fileSize > this.imageSize) {
                alert('Your file exceeds the max file size limit')
                return false
            }
            if (!_.contains(this.acceptedFileTypes, fileType)) {
                alert("Your file type is not accepted")
                return false
            }
            console.log(type)
            console.log(files)
            return true
        }
        
    }

    handleOnDrop(files, rejectedFiles) {
        this.validateFile(rejectedFiles, "Rejected Files")
        const isValidated = this.validateFile(files, "Accepted Files")
        if (isValidated) {
            const validatedFile = files[0]
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                this.setState({
                    imageSource: reader.result
                })
            }, false)
            reader.readAsDataURL(validatedFile)
        }
    }

    handleOnCropChange(crop) {
        this.setState({
            cropOptions: crop,
        })
    }

    handleImageLoaded(image) {
        console.log(image)
        this.setState({
            croppedImage: image
        })
    }
    
    handleOnCropComplete(crop, pixelCrop) {
        console.log(crop)
        console.log(pixelCrop)
        this.setState({
            pixelCrop: pixelCrop
        })
       
    }

    getCroppedImage(image, pixelCrop) {
        const canvas = document.createElement('canvas');
        canvas.width = pixelCrop.width
        canvas.height = pixelCrop.height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );
        this.setState({
            base64Image: canvas.toDataURL('image/jpeg')
        })
    }

    handleSimpleFileSelect(event) {
        event.preventDefault()
        const files = event.target.files[0]
        console.log(files)
        if (files) {
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                this.setState({
                    simpleImageSource: reader.result
                })
            }, false)
            reader.readAsDataURL(files)
        }
    }

    handleDownloadImage() {
        var link = document.createElement('a');
        link.href = this.state.base64Image;
        link.download = 'Download.jpg';
        document.body.appendChild(link);
        link.click();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.imageSource !== prevState.imageSource) {
            this.setState({
                cropImageSource: this.state.imageSource,
            })
        }
        if (this.state.croppedImage !== prevState.croppedImage) {
            this.setState({
                croppedImage: this.state.croppedImage
            })
            this.getCroppedImage(this.state.croppedImage, this.state.pixelCrop)
        }
        if (this.state.pixelCrop !== prevState.pixelCrop) {
            this.setState({
                pixelCrop: this.state.pixelCrop
            })
            this.getCroppedImage(this.state.croppedImage, this.state.pixelCrop)
        }
        if (this.state.simpleImageSource !== prevState.simpleImageSource) {
            this.setState({
                simpleImageSource: this.state.simpleImageSource
            })
        }
    }

    render() {
        const { imageSource, cropImageSource, cropOptions, base64Image, pixelCrop, simpleImageSource } = this.state
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <div className="row margin-yaxis-12">
                            <div className="col s12 teal-text text-lighten-5">
                                Dropzone Files
                            </div>
                        </div>
                        <div className="row margin-yaxis-12">
                            <div className="col s2">
                                <DropZone 
                                    onDrop={this.handleOnDrop}
                                    multiple={false}
                                    accept={this.acceptedFileTypes} 
                                    maxSize={this.imageSize}> 
                                    Drop your files Here 
                                </DropZone>
                            </div>
                            <div className="col s2">
                                <div className="card">
                                    <div className="card-image">
                                        {imageSource !== null ? <img src={imageSource} width="200" height="200" alt="Preview of the image"/> : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="col s2">
                                <ReactCrop 
                                    src={cropImageSource} 
                                    crop={cropOptions} 
                                    onImageLoaded={this.handleImageLoaded}
                                    onComplete={this.handleOnCropComplete}
                                    onChange={this.handleOnCropChange}/>
                            </div>
                            <div className="col s2">
                                <div>
                                    {base64Image !== "" ? <img src={base64Image} width={pixelCrop.width} height={pixelCrop.height} alt="Preview of the image" /> : ""}
                                </div>
                                <div>
                                    {base64Image !== "" ?
                                        <a 
                                            download
                                            onClick={this.handleDownloadImage}
                                            className="btn indigo waves-effect waves-light">
                                            Download!
                                        </a> 
                                        : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="row margin-yaxis-12">
                            <div className="col s12 teal-text text-lighten-5">
                                Dropzone Multiple Files
                            </div>
                        </div>
                        <div className="row margin-yaxis-12">
                            <div className="col s12">
                                <DropZone 
                                    onDrop={this.handleOnDrop} 
                                    maxSize={this.imageSize}> 
                                    Drop your files Here 
                                </DropZone>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <form className="col s12">
                        <div className="row margin-yaxis-12">
                            <div className="col s12">
                                <label className="teal-text text-lighten-5">File Upload</label>
                            </div>
                        </div>
                        <div className="row margin-yaxis-12">
                            <div className="file-field input-field col s12">
                                <div className="btn grey lighten-1 black-text waves-effect waves-light">
                                    <span>Browse</span>
                                    <input 
                                        type="file" 
                                        accept={this.acceptedFileTypes} 
                                        onChange={this.handleSimpleFileSelect} 
                                        multiple={false}/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload your File"/>
                                </div>
                            </div>
                        </div>
                        <div className="row margin-yaxis-12">
                            <div className="col s2">
                                <div className="card">
                                    <div className="card-image">
                                        {simpleImageSource !== null ? <img src={simpleImageSource} width="200" height="200" alt="Preview of the simple image" /> : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row margin-yaxis-12">
                            <div className="col s12">
                                <label className="teal-text text-lighten-5">Multiple File Upload</label>
                            </div>
                        </div>
                        <div className="row margin-yaxis-12">
                            <div className="file-field input-field col s12">
                                <div className="btn red lighten-2 waves-effect waves-light">
                                    <span>Browse</span>
                                    <input type="file" multiple/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload Your File"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ImageUploadPage