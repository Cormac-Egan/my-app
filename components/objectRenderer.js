function myObjFn(myObject, counter = 0) {

    let results = []
    for (let key in myObject) {
        if (key != "isObject" ) {
            if (myObject.hasOwnProperty(key)) {

                let element = {
                    "key": key,
                    "value": myObject[key],
                    "isObject": typeof myObject[key] == "object"
                }

                if (element.value == null) {
                    element.isObject = false
                }
                if (!element.isObject && element.value != null && !Number.isInteger(element.value) && isNaN(element.value) && new Date(element.value) instanceof Date)
                {
                    let date = new Date(element.value)
                    if (date.toString() !="Invalid Date")
                        element.value = date.toString()
                }
                else {

                    if (Array.isArray(myObject[key])) {
                        for (let item in myObject[key]) {
                            let test = true
                            if (myObject[key][item].isObject) {
                                test = false
                            } if (test) {
                                element.isObject = false
                                element.value = myObject[key].join()
                            }

                        }
                    }
                }

                results.push(element)
            }
        }

    }
    return results
}

export default function ObjectRenderer({ myObject }) {

    return (
        <>
            <div className="tab w-full overflow-hidden border-t" key={myObject.id}>
                <input className="absolute opacity-0 " id={myObject.id} type="checkbox" name="tabs"></input>
                <label className="block p-5 leading-normal cursor-pointer" htmlFor={myObject.id}>{myObject.name} ({myObject.symbol})</label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                    <div className="border-2">
                        {myObjFn(myObject).map((item) => {
                            if (item.value != null) {
                                if (!item.isObject) {
                                    return (<><b>{item.key} : </b> {item.value}<br /></>)
                                }
                                if (item.isObject) {
                                    return (<><b>{item.key}</b> : [{myObjFn(item.value).map((subItem) => {
                                        if (subItem.value != null) {
                                            if (!subItem.isObject) {
                                                return (<><br/>&nbsp;&nbsp;&nbsp;&nbsp;<b>{item.key + '-' + subItem.key} : </b> {subItem.value}</>)
                                            }
                                            if (subItem.isObject) {
                                                return (<><br />&nbsp;&nbsp;&nbsp;&nbsp;<b>{item.key + '-' + subItem.key}</b> : [{myObjFn(subItem.value).map((subSubItem) => {
                                                    if (subSubItem.value != null) {
                                                        if (!subSubItem.isObject) {
                                                            return (<><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{item.key + '-' + subItem.key + '-' + subSubItem.key} : </b> {subSubItem.value}</>)
                                                        }
                                                    }
                                                })}&nbsp;&nbsp;&nbsp;&nbsp;]<br /></>)
                                            }
                                        }
                                    })}]<br /></>)
                                }
                            }
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}