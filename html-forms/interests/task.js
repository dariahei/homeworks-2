const input = document.querySelectorAll('.interest__check');
console.log(input);

input.forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.closest('li');
        const kids = parent.querySelectorAll('ul.interests_active input.interest__check');
        kids.forEach(kid => {
            kid.checked = item.checked;
        })
    })
})

// const interestsInnerLevel = interestHightLevel[0].nextElementSibling.children;
// console.log(interestsInnerLevel);






// document.querySelectorAll(".interest__check").forEach((checkbox) => {
//     checkbox.addEventListener('click', (e) => {
//         const parent = checkbox.closest('li'),
//             kids = parent.querySelectorAll('ul.interests_active input.interest__check');
//         kids.forEach((kid) => {
//             kid.checked = checkbox.checked;
//         })
//     });
// })