Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    launch: function() {
        Rally.data.ModelFactory.getModel({
            type: 'Defect',
            success: function(model) {
                this.grid = this.add({
                    xtype: 'rallygrid',
                    model: model,
                    columnCfgs: [
                        "Blocked",
                        "Requirement",
                        "Name",
                        "ObjectID",
                        {text: 'Link', xtype:'templatecolumn',
                            tpl:new Ext.XTemplate(
                            '<a href="https://rally1.rallydev.com/#/5924772439d/detail/userstory/{Requirement.ObjectID}">{Requirement._refObjectName}</a>'
                        )}
                    ],
                    listeners:{
                     itemclick:function(){
                         alert("Test");
                     }
                    },
                    storeConfig: {
                        filters: [
                            {
                                property: 'Name',
                                operator: 'contains',
                                value: 'a'
                            },
                            {
                                property: 'Name',
                                operator: '!contains',
                                value: 'z'
                            }
                        ]
                    }
                });
            },
            scope: this
        });
    }
});