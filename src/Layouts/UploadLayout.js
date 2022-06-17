import {BsCloudUpload} from 'react-icons/bs';

export default function UploadLayout() {

    return (

        <div className="upload-layout">

            <div className='upload-inner'>


                <div className="drag-area">

                    <div className="drag-card">

                        <BsCloudUpload style={{fontSize:'20px'}} /><br></br>

                        Drag and drop yours files here or
                        <br></br><br></br>

                        <button>Browse Files</button>
                        

                    </div>

                </div>



                <div className="upload-section">


                        <form>

                        <input type='text' placeholder='Title' />

                        <input type='text' placeholder='Description' />

                        <input type='text' col='3' placeholder='Introduction' />

                        <div className='select-area'>


                        <div>

                        <select>
                            <options>Departmant</options>
                            <options>Departmant</options>
                            <options>Departmant</options>
                            <options>Departmant</options>
                        </select>    
                            
                        </div>

                        <div>

                        <select>
                            <options>Departmant</options>
                            <options>Departmant</options>
                            <options>Departmant</options>
                            <options>Departmant</options>
                        </select>


                        </div>

                        


                        </div>


                        


                        <button><BsCloudUpload/> Upload</button>




                        </form>


                    

                </div>

                </div>


        </div>

    );

}