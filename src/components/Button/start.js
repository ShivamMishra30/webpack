import './hello-world.css'
class HelloWorldButton{
    render(){
        const body = document.querySelector('body')
        const button = document.createElement('button');
        button.innerHTML = "Hello World"
        button.classList.add('hello-world-button')
        button.onclick = function(){
            const p = document.createElement('p')
            p.innerHTML = 'Hello World'
            p.classList.add('hello-world-text')
            body.appendChild(p)
        }
        body.appendChild(button)
    }
}

export default HelloWorldButton