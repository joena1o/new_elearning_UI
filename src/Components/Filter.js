import Badge from "./Badge";
export default function Filter(){


    const dept = ['SES','SEET', 'SAAT', 'SMIT', 'SPAS', 'SLS']

    return(

        <div className="filter-bar">

            <div className="filter-inner">

                {
                    dept.map((value)=>{

                        return <Badge text={value} />

                    })
                }

    
            </div>

        </div>

    );

}