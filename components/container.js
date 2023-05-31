
import Head from "next/head";
import Header from "./header";
const Container  = (props) => (
    <div>
        <Head>
            <title> Project</title>
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZwv-model-vue1T"
            crossorigin="anonymous"
          />
          <link rel="stylesheet"  href="/style/style.css"/>
        </Head>
        <Header/>

        <div>
            {props.children}
        </div>
    </div>



);
export default Container;