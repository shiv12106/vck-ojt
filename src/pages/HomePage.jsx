import Header from "../Components/Heder/Header";
const HomePage = () => {
    return(
        <div  class="container">
            <Header/>

    <div>
        <title>Vivekanand College - BCA Department</title>

        <h2>About Our BCA Department</h2>
        <p>Empowering students with cutting-edge technology and programming skills.</p>

        <h2>Specializations</h2>
        <ul>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Cybersecurity & Ethical Hacking</li>
            <li>Web Development & UI/UX Design</li>
            <li>Cloud Computing & DevOps</li>
        </ul>

        <button class="btn" onclick="goToAdmissions()">Apply Now</button>
    </div>
</div>



    )
}

export default HomePage;
