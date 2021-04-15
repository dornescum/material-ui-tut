import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Typography from "@material-ui/core/Typography";

const MessageEditor=()=>{
  return (
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
                editor={ ClassicEditor }
                data="<p>  dsdasdasd ad asd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et excepturi nisi odit reprehenderit repudiandae vero? A amet architecto delectus doloribus expedita fuga illum ipsa itaque iure, laborum magni maxime modi natus necessitatibus nihil omnis optio reprehenderit sunt tenetur ullam? Aliquam aliquid aspernatur autem consectetur consequatur dolorem dolores eius, fugiat laudantium nam nostrum numquam officia omnis quaerat quidem quod reprehenderit tempore, tenetur, velit voluptatem. Accusantium aspernatur corporis enim ex excepturi facilis illo impedit libero minus mollitia necessitatibus nemo obcaecati odit optio perspiciatis provident quia quod repellendus reprehenderit, repudiandae sequi suscipit velit. Assumenda culpa distinctio ducimus et iste nostrum perspiciatis quas vel? Adipisci blanditiis dicta ea fuga inventore ipsa placeat qui repellendus saepe tempore. A et harum inventore ipsa iste nisi pariatur perspiciatis porro quia quibusdam sapiente, sit temporibus voluptates. Aperiam eum facilis officia quas tempore! Debitis, iure, veniam. Aliquid amet commodi delectus deleniti dignissimos dolores, enim eos fugiat, harum illum impedit labore nobis perspiciatis repellat veniam! Accusamus dolor, est fuga in ipsa ipsam ipsum, iure libero modi necessitatibus nesciunt nostrum nulla odit quia sequi similique, temporibus tenetur voluptates. Accusamus animi aperiam consequatur, delectus eaque eveniet facere hic minima omnis optio pariatur quasi recusandae sit soluta temporibus ut, veritatis voluptas! Suscipit!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        </div>
    );
}
export default MessageEditor;
