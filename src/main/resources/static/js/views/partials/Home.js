export default function Home(props) {
    console.log("This is the Home Page");
    console.log(props)
    //props.user.username displays the user which currently is a testUser
    return `
<head>
<script type=“text/javascript” src=“src/main/resources/static/js/views/partials/controller.js”></script>
</head>
        <header>
            <h1>Home Page</h1>
            <h3>Hello, ${props.user.username}</h3>
        
        </header>
        <main>
            <div>
                <p>
                    This is the home page text.
                </p>    
            </div>
             
        </main>
    `;
}