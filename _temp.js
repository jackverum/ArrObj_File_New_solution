// //This is HW
// console.log(111);
// let obj = {};
let arr = [];
let arrCalend = [];
let url = 'files.json';
        const responce = fetch(url)
        responce.then((responce) => responce.json())
            .then(json => {
                console.log(json);
                // const FILES = json.files; // {name, base}
                arr = json.files; // {name, base}
                // console.log(FILES);
                // debugger 
                // FILES.map(fileObj => arr.push(fileObj))
                for (const key of arr) {
                    let data = [];
                    key.data = data;
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
                    // valFileObj.data.push(arrCalend); // валидний вариант
                    valFileObj.data = arrCalend; 
                    // let val = valFileObj.data.push(arrCalend);
                    // console.log(val);
                    // let [simpleArrData] = [...valFileObj.data];
                    // console.log(simpleArrData);
                    // valFileObj.data.push(simpleArrData);

                    // obj = Object.assign(valFileObj, arrCalend);
                    // console.log(obj);
                    // for (const key in valFileObj) {
                    //     console.log(valFileObj);
                    // }
                })
                console.log('arrCalend', arrCalend);
                console.log('arr', arr);
            })

let wrapElem = document.querySelector('.wrap');
const productHTML = `
    <div class="product_file">{file}</div>
    <div class="product_base">
        <div class="product_base-tile">{base}</div>
        <div class="product_base-content">
            <div class="product_days">
                <div class="days_period">day 1 - day 5</div>
                {day}
               
            </div>
            <div class="product_calendar">
                <div class="calendar_period">calendar day 1 - calendar day 5</div>
                {calendarDay}
                
            </div>
        </div>
    </div>
`;

arr.map(item => { productConstruct(item)});

function productConstruct(file) {
    let _newProdHTML = productHTML;
    // debugger 
    console.log(file.data);
    _newProdHTML = _newProdHTML.replace('{file}', file.name);
    _newProdHTML = _newProdHTML.replace('{base}', file.base);
    _newProdHTML = _newProdHTML.replace('{day}', createDaysHTML(file.data));
    _newProdHTML = _newProdHTML.replace('{calendarDay}', createCalendarHTML(file.data));
    // console.log(_newProdHTML);
    let prod = document.createElement('div');
    prod.classList.add('product');
    prod.innerHTML = _newProdHTML;
    wrapElem.append(prod);
};

// console.log(proDays.querySelectorAll('.'));

function createDaysHTML(wokDay) {
    let workDaysHTML = '';
    wokDay.forEach(workDay => {
        workDaysHTML += `
                <div class="days_count">day ${workDay.field.slice(-1)}</div>
            `;
        });
        return workDaysHTML;
}

function createCalendarHTML(calendar) {
    let calendDayHTML = '';
    calendar.forEach(calenDay => {
        calendDayHTML += `
                <div class="calendar_count"> ${calenDay.calendarDay} </div>
            `;
    });
    return calendDayHTML;
}


// ****************************************************************
// ****************************************************************