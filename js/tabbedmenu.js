const tabs = document.querySelectorAll('.tablink');
    const contents = document.querySelectorAll('.tabcontent');
        
    tabs.forEach((element,index) => {
        element.addEventListener('click',()=>{
            tabs.forEach((element1,index1) =>{
                element1.classList.remove('active-tab-btn');
                contents[index1].classList.remove('active-tab');
            })
            element.classList.add('active-tab-btn');
            contents[index].classList.add('active-tab');
        })
    })
