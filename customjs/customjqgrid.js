$(function() {
    $("#list").jqGrid({
        url: "../localdata/metadata.json",
        datatype: "json",
        mtype: "GET",
        colNames: ['ProductId', 'Name', 'Type', 'Price', 'Date', 'Description'],
        colModel: [{
            name: 'ProductId',
            index: 'ProductId',
            width: 55
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
        caption: 'demo jqGrid',
        loadonce: true,
        autowidth: true,
        editurl: "clientArray",
        ondblClickRow: function(id){
          alert("You are double click row with id: " +id);
        },
        // cellEdit: true
    })
    .navGrid('#pager',{
      search: true,
      view: true,
      edit: true,
      add: true,
      del: true
    })
    .jqGrid('filterToolbar',{
      autosearch: true,
      searchOnEnter: false
    })


    // custom method
    $("#add").click(function(){
      jQuery("#list").jqGrid("editGridRow", "new", {height: 400, reloadAfterSubmit: true});
    });
    $("#edit").click(function(){
      var newID=jQuery("#list").jqGrid("getGridParam", "selrow");
      if (newID != null) {
        jQuery("#list").jqGrid("editGridRow", newID);
      }else {

        alert("please select one row");
      }
    });
    $("#delete").click(function(){
      var newID2=jQuery("#list").jqGrid('getGridParam', 'selrow');
      if (newID2 != null) {
        jQuery('#list').jqGrid('delGridRow', newID2);
      }else {
        alert("please select one row");
      }
    });
    $("#search").click(function(){
      jQuery("#list").jqGrid("searchGrid", {sopt:['cn','bw','eq','ne','lt','gt','ew']});
    })
});
