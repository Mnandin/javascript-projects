import data from './taiwan_districts.js'

$(document).on('DOMContentLoaded', () => {

    let citySelector = $('#city')
    let districtSelector = $('#district')
    let tbody = $('tbody')
    console.log(tbody)

    function createTable(){
        $.each(data, function(index, cityValue){
            let rowspan = cityValue.districts.length + 1
                let cityRow = `<tr>
                                    <td rowspan="${rowspan}">${cityValue.name}</td>
                                </tr>`;
                $.each(cityValue.districts, function(index, districtVal){
                    cityRow += `<tr>
                        <td>${districtVal.name}</td>
                        <td>${districtVal.zip}</td>
                    </tr>`
                })
                       
            let option = `<option>${cityValue.name}</option>`
            tbody.append(cityRow)
            citySelector.append(option)

        })
        createDistrict(0)
    }
    createTable()

    function createDistrict(cityIndex) {
        districtSelector.text('')
        let selectedCity = data[cityIndex]
        let districts = selectedCity.districts;

        $.each(districts, function(index, value){
            let option = `<option>${value.zip} ${value.name}</option>`
            districtSelector.append(option)
        })
    }

    citySelector.on('change', () => {
        let cityIndex = citySelector.prop('selectedIndex');
        createDistrict(cityIndex)
    })
})
