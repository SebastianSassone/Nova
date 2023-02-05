import React from 'react';
import Cuenta_in from '../Cuenta/Cuenta_in_li'
import Post from './Post_in'

class NuevoPost extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert(this.state.value);
      event.preventDefault();
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
      document.getElementById('mos_nu_post').style.display = 'flex'
      document.getElementById('button').disabled=true
      document.getElementById('textarea').disabled=true
      document.getElementById('file-1').disabled=true
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt="Img Post"/>);
      } else {
        $imagePreview = (<div className="previewText">Img</div>);
      }
  
      return(
        <section className="sec_nuevopost">
            <div className="div_nuevopost">
                <Cuenta_in></Cuenta_in>
                <form className="nuevo_post" onSubmit={(e)=>this._handleSubmit(e)} id="nuevo_post">
                    <textarea 
                    id="textarea"
                    type="textarea"
                    placeholder="¿Que deseas compartir hoy?" 
                    value={this.state.value} onChange={this.handleChange}></textarea>
                    <div>
                    <div className='preview'>{$imagePreview}</div>
                    <input type="file" accept="image/*" name="file-1" id="file-1" class="inputfile inputfile-1" data-multiple-caption="{count} archivos seleccionados" multiple 
                    onChange={(e)=>this._handleImageChange(e)}/>
                    <label for="file-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
                    <span class="iborrainputfile">Seleccionar archivo</span>
                    </label>
                    <button id="button" type="submit" onClick={(e)=>this._handleSubmit(e)}>Crear</button>
                     
                    </div>
                </form>
            </div>
            <div className='mos_nu_post' id='mos_nu_post'>
            <Post img={$imagePreview} contenido={this.state.value}></Post>
            </div>
        </section>
      )
    }
  }
   
export default NuevoPost

