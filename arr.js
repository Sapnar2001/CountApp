const inputArray = [
 	{
 	categoryId: 'fruits',
 	title: 'mango',
 	quantity: 2,
 	},
 	{
 	categoryId: 'fruits',
 	title: 'apple',
 	quantity: 5,
 	},
 	{
 	categoryId: 'fruits',
 	title: 'coconut',
 	quantity: 4,
 	},
 	{
 	categoryId: 'fruits',
 	title: 'orange',
 	quantity: 2,
 	},
 	{
 	categoryId: 'fruits',
 	title: 'pomegranade',
 	quantity: 2,
 	},
 	{
 	categoryId: 'fruits',
 	title: 'mausmi',
 	quantity: 3,
 	},
 	{
 	categoryId: 'flowers',
 	title: 'rose',
 	quantity: 1,
 	},
 	{
 	categoryId: 'flowers',
 	title: 'lili',
 	quantity: 4,
 	},
 	{
 	categoryId: 'flowers',
 	title: 'jasmine',
 	quantity: 2,
 	},
 	{
 	categoryId: 'flowers',
 	title: 'hibiscus',
 	quantity: 8,
 	},
 	{
 	categoryId: 'flowers',
 	title: 'daffodils',
 	quantity: 9,
 	},
 	{
 	categoryId: 'flowers',
 	title: 'seasonal flowers',
 	quantity: 1,
 	},
 	{
 	categoryId: 'flowers',
 	title: 'sregional fruits',
 	quantity: 1,
 	},
 	{
 	categoryId: 'vegetables',
 	title: 'potato',
 	quantity: 8,
 	},
 	{
 	categoryId: 'vegetables',
 	title: 'tomato',
 	quantity: 5,
 	},
 	{
 	categoryId: 'vegetables',
 	title: 'guard',
 	quantity: 2,
 	},
 	{
 	categoryId: 'vegetables',
 	title: 'brinjal',
 	quantity: 6,
 	},
 	]


    [
        {
            title: fur,
            data: [item1, item2]
        }
    ]

    const outp=[];
    ==>For (item){
        if(outp.len){
            outp.map((el) => {
                if(el.categoryId=== item.categoryId){
                    el.data.push(item)
                }else {
                    let neData = [{
                        title: categoryId,
                        data: [...data, item]
                    }]
                 outp.push(neData)   
                }
            })
        }else {
            let neData = [{
                title: categoryId,
                data: [item]
            }]
         outp.push(neData)   
        }

    }