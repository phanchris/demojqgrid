$(function() {
    $("#list").jqGrid({
            // url: "../localdata/metadata.json",
            datatype: "local ",
            mtype: "GET",
            colNames: ['ProductId', 'Name', 'Type', 'Price', 'Date', 'Description'],
            colModel: [
            //   {
            //     name: 'mac',
            //     formatter: 'actions',
            //     search: false,
            //     width: 40,
            //     sortable: false
            // },
            {
                name: 'ProductId',
                index: 'ProductId',
                width: 55,
                editable: true
            }, {
                name: 'Name',
                index: 'Name',
                editable: true,
                // editoptions:{size:"20",maxlength:"30"},
                width: 90
            }, {
                name: 'Type',
                index: 'Type',
                width: 80,
                editable: true,
                align: 'right'
            }, {
                name: 'Price',
                index: 'Price',
                width: 80,
                formatter: "currency",
                editable: true,
                align: 'right'
            }, {
                name: 'Date',
                index: 'Date',
                width: 80,
                formatter: 'date',
                edittype: 'date',
                editable: true,
                align: 'right'
            }, {
                name: 'Description',
                index: 'Description',
                width: 150,
                editable: true,
                sortable: false,
                edittype: "textarea"
            }],
            pager: "#pager",
            rowNum: 5,
            rowList: [5, 10, 15],
            sortname: 'ProductId',
            sortorder: 'desc',
            viewrecords: true,
            gridview: true,
            multiselect: false,
            caption: 'Demo jqGrid',
            loadonce: true,
            autowidth: true,
            sortable: true,
            editurl: "clientArray",
            subGrid: true,
            subGridUrl: "../localdata/subdata.json",
            subGridModel: [{
                name: ['No', 'Item', 'Qty', 'Unit', 'Line Total'],
                width: [55, 200, 80, 80, 80]
            }],
            ondblClickRow: function(id) {
                alert("You are double click row with id: " + id);
            },
            // cellEdit: true
        })
        .navGrid('#pager', {
            search: true,
            view: true,
            edit: true,
            add: true,
            del: true,
        })
        .jqGrid('filterToolbar', {
            autosearch: true,
            searchOnEnter: false
        })
        .jqGrid('sortableRows') // sort able

    // custom method

    $("#add").bind("click", function() {

        jQuery("#list").jqGrid("editGridRow", "new", {
            height: 350,
            reloadAfterSubmit: false
        });

        $('#sData').on("click",function() {
          // var text = $('.ui-sortable tr:nth-child(2) td:nth-child(2)').text();
            // alert(text);
        });
    });
    $("#edit").click(function() {
        var newID = jQuery("#list").jqGrid("getGridParam", "selrow");
        if (newID != null) {
            jQuery("#list").jqGrid("editGridRow", newID);
        } else {

            alert("please select one row");
        }
    });
    $("#delete").click(function() {
        var newID2 = jQuery("#list").jqGrid('getGridParam', 'selrow');
        if (newID2 != null) {
            jQuery('#list').jqGrid('delRowData', newID2);
        } else {
            alert("please select one row");
        }
    });
    $("#search").click(function() {
        jQuery("#list").jqGrid("searchGrid", {
            sopt: ['cn', 'bw', 'eq', 'ne', 'lt', 'gt', 'ew']
        });
    })
    var myData = [{
        "ProductId": "001",
        "Name": "Iphone 4",
        "Type": "Mobile",
        "Price": "4",
        "Date": "12/02/2016",
        "Description": "this is the smart phone"
    }, {
        "ProductId": "002",
        "Name": "Sam sung",
        "Type": "Mobile",
        "Price": "6.5",
        "Date": "13/06/2016",
        "Description": "this is the smart phone"
    }, {
        "ProductId": "003",
        "Name": "Xiaomi Note 5",
        "Type": "TV",
        "Price": "6",
        "Date": "21/08/2016",
        "Description": "this is the smart phone"
    }, {
        "ProductId": "004",
        "Name": "Black berry Priv",
        "Type": "Mobile",
        "Price": "11",
        "Date": "01/08/2016",
        "Description": "OS Black berry 10"
    }, {
        "ProductId": "005",
        "Name": "Sam sung galaxy S7",
        "Type": "Mobile",
        "Price": "189",
        "Date": "03/06/2015",
        "Description": "Make in Korea"
    }, {
        "ProductId": "006",
        "Name": "Mobile-Star",
        "Type": "Mobile",
        "Price": "121",
        "Date": "21/05/2014",
        "Description": "Made in chine"
    }, {
        "ProductId": "007",
        "Name": "Lenovo-A700A",
        "Type": "Mobile",
        "Price": "98",
        "Date": "01/05/2015",
        "Description": "New smart phone with screen 5.5 inch"
    }, {
        "ProductId": "008",
        "Name": "Xiaomi MacBook Air",
        "Type": "Laptop",
        "Price": "12",
        "Date": "13/07/2016",
        "Description": "Similar Mac pro..."
    }, {
        "ProductId": "009",
        "Name": "IPhone 6S",
        "Type": "Mobile",
        "Price": "16",
        "Date": "01/12/2015",
        "Description": "this is the smart phone"
    }, {
        "ProductId": "010",
        "Name": "Bphone",
        "Type": "Mobile",
        "Price": "9",
        "Date": "01/08/2015",
        "Description": "New smart phone. This is the first mobile was made in VietNam"
    }];
    for (var i = 0; i <= myData.length; i++) {
        jQuery("#list").jqGrid('addRowData', i + 1, myData[i]);
    }
});
