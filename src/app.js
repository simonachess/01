import axios from 'axios';

// axios.get('http://localhost:3003/labas/simona').
//     then(res => {
//         console.log(res);
//         // document.querySelector('body').innerHTML = res.data;
//     })

// console.log('hello')

window.addEventListener('DOMContentLoaded', () => {
    const alert = document.querySelector(".alert-danger");
    const result = document.querySelector(".alert-success");
    document.querySelector('button').addEventListener('click', () => {
        const data = {};
        data.d1 = document.querySelector('#d1').value || 0;
        data.d2 = document.querySelector('#d2').value || 0;
        data.action = document.querySelector('#action').value;
        axios.
            post('http://localhost:3003/calculator', data).
            then(res => {
                console.log(res);
                if (res.data.errMsg) {
                    alert.style.display = 'block';
                    result.style.display = 'none';
                    alert.innerHTML = res.data.errMsg;
                } else {
                    alert.style.display = 'none';
                    result.style.display = 'block';
                    result.innerHTML = res.data.answer;
                }
            })
    })
})
