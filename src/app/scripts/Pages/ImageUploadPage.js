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
        this.imageSize = 50 * 1024
        this.acceptedFileTypes = ['image/x-png', 'image/png', 'image/jpg', 'image/jpeg', 'image/gif']
        this.state = {
            imageSource: null,
            cropImageSource: "",
            cropOptions: {
                aspect: 1/1
            }
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
    }
    
    handleOnCropComplete(crop, pixelCrop) {
        console.log(crop, pixelCrop)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.imageSource !== prevState.imageSource) {
            this.setState({
                cropImageSource: this.state.imageSource,
            })
        }
    }

    render() {
        const { imageSource, cropImageSource, cropOptions } = this.state
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
                                    <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload your File"/>
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