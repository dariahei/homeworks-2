// const progress = document.getElementById('progress');
// const btn = document.getElementById('send');
// console.log(progress.value);

const urlAd = 'https://students.netoservices.ru/nestjs-backend/upload';
const formData = new FormData(document.forms[0]);
// const xhr = new XMLHttpRequest();

// // const body = 

// btn.onclick = () => {
//     xhr.open('post', urlAd, body);

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 1) {
//             progress.value = 0.25;  
//         } else if (xhr.readyState === 2) {
//             progress.value = 0.5;  
//         } else if (xhr.readyState === 3) {
//             progress.value = 0.75; 
//         } else if (xhr.readyState === 4) {
//             progress.value = 1; 
//         }
//     }
//     console.log(xhr.upload);
//     xhr.send(formData);

//     console.log(formData);
// }


document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 1) {
            progress.value = 0.25;  
        } else if (xhr.readyState === 2) {
            progress.value = 0.5;  
        } else if (xhr.readyState === 3) {
            progress.value = 0.75; 
        } else if (xhr.readyState === 4) {
            progress.value = 1; 
        }
    })

    xhr.open('post', urlAd);

    xhr.send(formData);
})

