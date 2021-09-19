// //This is HW
// console.log(111);
let obj = {};
let arr = [];
let arrCalend = [];
let url = 'files.json';
        let responce = fetch(url)
        responce.then((responce) => responce.json())
            .then(json => {
                console.log(json);
                let FILES = json.files;
                // console.log(FILES); 
                FILES.map(fileObj => arr.push(fileObj))
                for (const key of arr) {
                    let data = [];
                    key.data = data
                }
                let DAYS = json.mapDays;
                // console.log(DAYS);
                // let getNumDays = ;
                let getUniqueDays = [...new Set(DAYS.map(itemDay => {
// productDays(itemDay)
                    return itemDay.workDay;
                }))];
                // console.log(getUniqueDays);
                getUniqueDays.forEach(itemNum => {
                    let filterDays = DAYS.filter(key => key.workDay == itemNum);
                    // let getCalendArr = filterDays.map(day => ({workDay: itemNum, calendar: 'calendarDay: ' + day.calendarDay}));
                    let getCalendArr = filterDays.map(day => {
                        return ('calendarDay: ' + day.calendarDay)

                        // let dataObj = {
                        //     data: [
                        //         {workDay: itemNum, calendarDay: [day.calendarDay]}
                        //     ]
                        // }
                        // return dataObj;

                    });
                    arrCalend.push({field: 'workDay ' + itemNum, calendarDay:  getCalendArr})
                    // console.log(getCalendArr);
                    // arr.push(getCalendArr)
                    // console.log(arr);
                    // let data = [
                    //     arrCalend
                    // ]
                    // console.log('data', data);

                    // let arr = [{name: 'width', value: 300},{name: 'height', value: 100}];
                    let obj = {};
                    arrCalend.forEach(pair => {
                        // console.log(pair);
                        // obj[pair.field] = pair.calendarDay
                        // console.log([pair.field]);
                        // console.log(pair.calendarDay);
                    })
                    // console.log(obj);
                    // console.log(dataObj);
                })
                arr.forEach(valFileObj => {
                    valFileObj.data.push(arrCalend);
                    // obj = Object.assign(valFileObj, arrCalend);
                    // console.log(obj);
                    // for (const key in valFileObj) {
                    //     console.log(valFileObj);
                    // }
                })
                console.log(arrCalend);
                console.log(arr);


let wrapElem = document.querySelector('.wrap');
arr.map(item => {
    console.log(item);
    console.log(item.name);
    console.log(item.data[0][0].field);
    productConstruct(item.name, item.base, item.data[0][0].field)
    // console.log(item.data[0][0].field)  // workDay1
});

function productConstruct(file, base, day) {
    let prod = document.createElement('div');
    prod.classList.add('product');
    prod.innerHTML = `
        <div class="product_file">${file}</div>
        <div class="product_base">
            <div class="product_base-tile">${base}</div>
            <div class="product_base-content">
                <div class="product_days">
                    <div class="days_period">day 1 - day 5</div>
                    
                </div>
                <div class="product_calendar">
                    <div class="calendar_period">calendar day 1 - calendar day 5</div>
               
                </div>
            </div>
        </div>
    `;
    wrapElem.append(prod);
};

// console.log(proDays.querySelectorAll('.'));

function productDays(day) {
    let proDays = document.querySelector('.product_days');
    let dayCount = document.createElement('div');
    dayCount.classList.add('days_count');
    dayCount.innerHTML = `  
            <div class="days_count">day ${day}</div>
    `;
    proDays.prepend(dayCount);
}
function productCalendar(day) {
    let proCalend = document.querySelector('.product_calendar');
    let dayCount = document.createElement('div');
    dayCount.classList.add('days_count');
    dayCount.innerHTML = `  
            <div class="calendar_count">calendar day ${day}</div>
    `;
    proCalend.append(dayCount);
}



// ****************************************************************
// ****************************************************************
// ****************************************************************
// ****************************************************************
// ****************************************************************
// ****************************************************************




                let fileArr = [];
                let baseArr = [];
                json.files.forEach(fileObj => { //  {"name": "file1", "base": true}, 
                    // fileArr.push(fileObj.name);
                    // baseArr.push(fileObj.base);
                    // console.log(fileArr);
                    // console.log();
                    fileArr.map(item => {
                        // obj.name = item;
                        // console.log(obj);
                       
                        baseArr.forEach(item => {
                            // obj.base = item;
                           
                        })
                    })
                    
                    // console.log(file);
                    // console.log(base);
                });
                // json.files.forEach(baseObj => {
                //     console.log(baseObj);
                //     console.log(baseArr.push(baseObj.base));

                // });
                // console.log(fileArr);
                // console.log(baseArr);
                fileArr.map(item => {
                    // let consrtFile = obj.push({name: item,})
                    // // console.log(consrtFile);
                    // return consrtFile;
                })
                // console.log('fileArr', fileArr);
                baseArr.map(item => {
                    // let consrtBase = obj.push({base: item,})
                    // // console.log(consrtFile);
                    // return consrtBase;
                })
                // let copy = Object.assign({}, fileArr, baseArr)
                // console.log(copy);

                // obj = Object.assign( fileArr, baseArr)

                // console.log(obj);
            });
            console.log(obj);


let obj1 = [
    {
        name: 'file1', 
        base: true, 
        data: [
            {workDay1: ['calendarDay1, calendarDay2']},
            {workDay2: ['calendarDay1, calendarDay2']},
        ]
    }
]

let obj2 = [
    {
        name: 'file1', 
        base: true, 
        data: [
            {workDay1: ['calendarDay1, calendarDay2']},
        ]
    },
    {
        name: 'file2', 
        base: true, 
        data: [
            {workDay2: ['calendarDay1, calendarDay2']},
        ]
    },
    {
        name: 'file2', 
        base: true, 
        data: [
            {workDay3: ['calendarDay1, calendarDay2, calendarDay3']},
        ]
    },
]


// // import fileAndBase from "./modules/filesAndBase.js";

// // window.addEventListener('DOMContentLoaded', () => {
// //     "use strict";
// // })


// const wrapElem = document.querySelector('.wrap');

// // const fileProductElem = document.querySelector('.product_file'),
// // baseProductElem = document.querySelector('.product_base-tile'),
// // dayProductElem = document.querySelector('.product_days'),
// // dayPeriodProductElem = document.querySelector('.days_period'),
// // calendarProductElem = document.querySelector('.product_calendar');
// // calendarPeriodElem = document.querySelector('.calendar_period');
// // calendarCountElem = document.querySelector('.calendar_count');
// const 
    
//     dayProductElem = document.querySelector('.product_days'),
//     dayPeriodProductElem = document.querySelectorAll('.days_period'),
//     dayCountProductElem = document.querySelectorAll('.days_count'),
//     calendarProductElem = document.querySelectorAll('.product_calendar');
//     // calendarPeriodElem = document.querySelectorAll('.calendar_period');
//     // calendarCountElem = document.querySelectorAll('.calendar_count');


// let createDomEl = (file1 = 'file111', base = 'base222') => {
//     let product = document.createElement('div');
//     product.classList.add('product');
//     product.innerHTML = `
//         <div class="product_file">${file1}</div>
//         <div class="product_base">
//             <div class="product_base-tile">${base}</div>
//             <div class="product_base-content">
               
            
//             </div>
//         </div>
//     `;
//     return product
//     // wrapElem.append(product);
// };

// function productDays(base = 'baseFunc') {
//     let productDays = document.createElement('div');
//     productDays.classList.add('product_days');
//     productDays.innerHTML = `
//         <div class="days_period">day 1 - day 5</div>
//     `;
//     return productDays;
// }

// function daysCount(dayNumber = 'Num') {
//     let days = document.createElement('div');
//     days.classList.add('days_count');
//     days.style.color = 'red';
//     days.innerHTML =  ` day ${dayNumber}`;
//     // productDays().prepend(days)
//     return days
// }

// function appendDaysCount(num) {
//     document.querySelector('.product_days').append(daysCount(num));
// }


// function calendarDays(params) {
//     console.log('params - ', params);
//     let calendarDays = document.createElement('div');
//     calendarDays.classList.add('product_calendar');
//     calendarDays.style.backgroundColor = 'yellow';
//     let calendarStracture = `
//     <div class="product_calendar">
//         <div class="calendar_period">calendar day 1 - calendar day 5</div>
//         <div class="calendar_count">calendar day 1</div>
//         <div class="calendar_count">calendar day 2</div>
//         <div class="calendar_count">calendar day 3</div>
//         <div class="calendar_count">calendar day 4</div>
//         <div class="calendar_count">calendar day 5</div>
//     </div>
//     `
//     calendarDays.innerHTML = calendarStracture;
//     return calendarDays;
// }

// // const fetchFunc = {
// //     getUrl() {
//         let url = 'files.json';
//         let responce = fetch(url)
//         responce.then((responce) => responce.json())
//             .then(json => {
//                 console.log('Это json', json);
//                 json.files.forEach(el => {  // перебор ключей массива "files" 
//                     // console.log(el);
// //  Создаю основную структуру таблицы
//                     wrapElem.append(createDomEl());
                    
//                 });
//                 let prodBase = document.querySelectorAll('.product_base-content');
//                 console.log(prodBase);
//                 prodBase.forEach(el => {
//                     // console.log('el', el);
// // Создаю day 1 - day 5
//                     el.prepend(productDays());
//                 })
            
//                 json.files.forEach(el => {
//                     console.log(el);
//                     let arr = [];
//                 });
                

// // Перебираю ['workDay'] 
//                 let numDays = json.mapDays.map(obj => {
//                     return obj.workDay
//                 })
// // Получаю уникальные значения
//                 let uniqueNumDays = [...new Set(numDays)]
               
//                 let arrNum = [];
//                 uniqueNumDays.forEach(num => {
//                     appendDaysCount(num)
//                     arrNum.push(num);
//                     // productDays().append(daysCount(num));
//                 })
//                 console.log(arrNum);
//                 let daysArr = [];
//                 arrNum.forEach(item => {
//                     let filterDays = json.mapDays.filter(key => {
//                         let days = key.workDay == item
//                         return (days);
//                     })
//                     console.log(filterDays);
//                     let newEquilDays = filterDays.map(day => {
//                         console.log(day.calendarDay);
//                         return 'calendarDay ' + day.calendarDay;
//                     });
//                     daysArr.push({'calendarDay': newEquilDays})
//                     console.log();
//                 })
//                 calendarDays(daysArr);
//                 console.log(daysArr);


//                 // prodBase.forEach(el => {
//                         // console.log('el', el);
//                     //     return 
//                     // })
                
                   

//                 for (const key in json.files) {
//                     // console.log(key);
//                     // appendDaysCount(num)
//                     // if (Object.hasOwnProperty.call(json, key)) {
//                     //     const element = json[key];
//                     //     // console.log(element);
//                     // }
//                 }
//                     // for (let i = 0; i < num; i++) {
//                     //     // const element = array[i];
//                     // }
//                     // let proDay = productDays();
//                     // console.log(productDays());
//                     // proDay.forEach(elem => {
//                     //     elem.append(daysCount(num));
//                     // })

                    
//                     // productDays().forEach(elem => {
//                         // console.log(elem);
//                     //     elem.append(daysCount(22));
//                     // })
                    
//                     // daysCount(num);

// /* Этот код переберает File  и ренидерит от file1 до file4 
// Также отображает base
// */ 
                
//    // import fetchFunction from "../filesBase.js";
// const fileAndBase = () => {
//     // console.log(fetchFunction);
        
    
    
    
//     // let url = 'files.json';
//     // let responce = fetch(url)
//     // responce.then((responce) => responce.json())
//     //     .then(json => {
    
//     // Left Side: File #
//                const fileProductElem = document.querySelectorAll('.product_file'),
//                baseProductElem = document.querySelectorAll('.product_base-tile');
//                for (let i = 0; i < json.files.length; i++) {
//                    const files = json.files[i];
//                    // console.log(fileProductElem);
//                        fileProductElem[i].innerHTML = files.name;
//                        fileProductElem[i].style.color = 'violet';
                   
//                    for (let key in files) {
//                        // console.log(files[key]);
//                        if (files[key] == false) {
//                            baseProductElem[i].style.display = 'none';
//                            baseProductElem[i].style.backgroundColor = 'violet';
//                        } else {
//                            baseProductElem[i].innerHTML = key;
//                            baseProductElem[i].style.backgroundColor = 'violet';
//                        }
//                    }
//                }
//     //END Left Side: File #
    
//                 let sortArr = json.files.forEach(newArr => {
//                     // console.log(newArr);
                
                 
//                     }); // END sortArr
    
//             // });
    
    
    
//     };
//     // export default fileAndBase;
//     fileAndBase();  // попытка сосдавать експорт файлов
    
    
//     /* Этот код переберает File  и ренидерит от file1 до file4 
//         Также отображает base
//     */ 
    
            





//             });  // END .then(json => { }
            


           
//     //     }
//     // }
        
//     // export const fetchFunction = fetchFunc.getUrl;


// prod.innerHTML = `
//         <div class="product_file">${file}</div>
//         <div class="product_base">
//             <div class="product_base-tile">${base}</div>
//             <div class="product_base-content">
//                 <div class="product_days">
//                     <div class="days_period">day 1 - day 5</div>
//                     <div class="days_count">day 1</div>
//                     <div class="days_count">day 2</div>
//                     <div class="days_count">day 3</div>
//                     <div class="days_count">day 4</div>
//                     <div class="days_count">day 5</div>
//                 </div>
//                 <div class="product_calendar">
//                     <div class="calendar_period">calendar day 1 - calendar day 5</div>
//                     <div class="calendar_count">calendar day 1</div>
//                     <div class="calendar_count">calendar day 2</div>
//                     <div class="calendar_count">calendar day 3</div>
//                     <div class="calendar_count">calendar day 4</div>
//                     <div class="calendar_count">calendar day 5</div>
//                 </div>
//             </div>
//         </div>
//     `;