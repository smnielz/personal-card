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
    if(color === 'c1')
    {
        root.style.setProperty('--text-color', '#252624');
        root.style.setProperty('--bg-color', '#895623');
    }
    else if(color === 'c2')
    {
        root.style.setProperty('--text-color', '#50C7C7');
        root.style.setProperty('--bg-color', '#E1F5F5');
    }
    else if(color === 'c3')
    {
        root.style.setProperty('--text-color', '#F0B30C');
        root.style.setProperty('--bg-color', '#E8DFBE');
    }
}
function changeShape(shape){
    document.documentElement.style.setProperty('--border', 'var(--'+shape +')');
    
}
function changeFont(font){
    document.documentElement.style.setProperty('--font','var(--'+font +')');
}
changeTheme('light')
changeColor('c1')
changeShape('soft')
changeFont('f3')
let light = ['light', 'dark'];
let shape = ['round', 'soft', 'sharp'];
let color = ['c1', 'c2', 'c3'];
let font = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'];

const picture = document.getElementById('pic')
let i = 1;
picture.addEventListener('click', function(){
    changeTheme(light[i % 2]);
    changeShape(shape[i % 3]);
    changeColor(color[i % 3]);
    changeFont(font[i % 7]);
    i++;
})