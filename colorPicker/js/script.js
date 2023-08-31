
// ＃～: IDで　.～: クラス
const $picker = document.querySelector('#colorPicker');
// getElementById だと#は消す
// const $picker = document.getElementById('colorPicker');
const $colorText = document.getElementById('colorText');
const $colorDisplay = document.getElementById('colorDisplay');
const $backgroundColor = document.body;
// let  $backgroundColor = document.body; だと動作しない

const matchColor = (color)=>{
    if (color === '#000000'){
        $colorText.textContent = `カラーコード: ${$picker.value}(black)`;
    }else if(color === '#ffffff'){
        $colorText.textContent = `カラーコード: ${$picker.value}(white)`;
    }
};

const colorBG = ()=> {
    if( $picker.value === '#ffffff'){
        $colorDisplay.style.display = "none";
    }else{
        
        // $colorText.textContent = "カラーコード: "+$picker.value
        $colorText.textContent = `カラーコード: ${$picker.value}`;
        matchColor($picker.value);
        // $colorDisplay.style.display = "inline";
        // $colorDisplay.textContent = $picker.value;
        // document.body.style.backgroundColor = $picker.value;   
        $backgroundColor.style.backgroundColor = $picker.value;
    }
};



$picker.addEventListener('input', colorBG);
