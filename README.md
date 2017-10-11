## Bureau Of Labor Statistics (BLS) CSV Data to JSON parser

<code>npm install --save blsjs</code>

<code>
    import BLS from 'blsjs' || var BLS = require('blsjs')
</code>

## Functions Available

- All arguments are strings

- specificIndustryNationalData
    <code>
        BLS.specificIndustryNationalData(year, quarter, region, industry)
    </code>

- allLocalData
    <code>
        BLS.allLocalData(year, quarter, region)
    </code>


- nationalIndustryData
    <code>
        BLS.nationalIndustryData(year, quarter, industry)
    </code>

- allIndustriesNationalData
    <code>
        BLS.allIndustriesNationalData(year, quarter)
    </code>

- allRegionalCodes
    <code>
        BLS.allRegionalCodes()
    </code>

- allIndustryCodes
    <code>
        BLS.allIndustryCodes()
    </code>
