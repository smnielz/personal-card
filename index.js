function changeTheme(theme){
    let root = document.documentElement;
    if(theme === 'light'){
        root.style.setProperty('--light', 'var(--bg-color)');
        root.style.setProperty('--dark', 'var(--text-color)');
       
    }
    else if(theme === 'dark'){
        root.style.setProperty('--dark', 'var(--bg-color)');
        root.style.setProperty('--light', 'var(--text-color)');
    }
}
function changeColor(color){
    let root = document.documentElement;
    if(color === 'c1'){
        root.style.setProperty('--text-color', '#252624');
        root.style.setProperty('--bg-color', '#895623');
    }else if(color === 'c2'){
        root.style.setProperty('--text-color', '#50C7C7');
        root.style.setProperty('--bg-color', '#E1F5F5');
    }else if(color === 'c3'){
        root.style.setProperty('--text-color', '#F0B30C');
        root.style.setProperty('--bg-color', '#E8DFBE');
    }else if (color === "c4") {
        root.style.setProperty('--bg-color', "#f2f6c3")
        root.style.setProperty('--text-color', "#68c4af")
    } else if (color === "c5") {
        root.style.setProperty('--bg-color', "#4c5b64")
        root.style.setProperty('--text-color', "#45241c")
    } else if (color === "c6") {
        root.style.setProperty('--bg-color', "#f06836")
        root.style.setProperty('--text-color', "#ba0001")
    } else if (color === "c7") {
        root.style.setProperty('--bg-color', "#99ccff")
        root.style.setProperty('--text-color', "#3366ff")
    } else if (color === "c8") {
        root.style.setProperty('--bg-color', "#91B247")
        root.style.setProperty('--text-color', "#597C2B")
    }  else if (color === "c9") {
        root.style.setProperty('--bg-color', "#fbec5d")
        root.style.setProperty('--text-color', "#6b3e26")
    } else if (color === "c10") {
        root.style.setProperty('--bg-color', "#75b855")
        root.style.setProperty('--text-color', "#ad3838")
    } else if (color === "c11") {
        root.style.setProperty('--bg-color', "#d62e2e")
        root.style.setProperty('--text-color', "#600000")
    } else if (color === "c12") {
        root.style.setProperty('--bg-color', "#6b8c21")
        root.style.setProperty('--text-color', "#704012")
    } else if (color === "c13") {
        root.style.setProperty('--bg-color', "#ffca16")
        root.style.setProperty('--text-color', "#f97300")
    } else if (color === "c14") {
        root.style.setProperty('--bg-color', "#41a8f9")
        root.style.setProperty('--text-color', "#064490")
    } else  {
        root.style.setProperty('--bg-color', "#f5f5f5")
        root.style.setProperty('--text-color', "#222222")
    } 
}
function changeShape(shape){
    document.documentElement.style.setProperty('--border', 'var(--'+shape +')');
    
}
function changeFont(font){
    document.documentElement.style.setProperty('--font','var(--'+font +')');
}
changeColor('c1')
changeFont('f3')
let color = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14'];
let font = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'];

const picture = document.getElementById('pic')
let i = 1;
picture.addEventListener('click', function(){
    changeColor(color[i % 14]);
    changeFont(font[i % 7]);
    i++;
})

const theme = document.getElementById('theme')
changeTheme(theme.value)
theme.addEventListener('change', function(){
    changeTheme(theme.value)
})

const shape = document.getElementById('shape')
changeTheme(shape.value)
shape.addEventListener('change', function(){
    changeShape(shape.value)
})