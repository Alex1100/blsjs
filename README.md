## Bureau Of Labor Statistics (BLS) CSV Data to JSON parser

<i>Note: I published this npm module with some inspiration from <a href="https://github.com/mhkeller">mhkeller</a>'s own qcew npm module. My intent was to actually use the data for a Location Quotient and Shift Share Analysis.</i>

<p>I urge you to look at the repo and specifically the underlying index.js file and see if you need to edit some code to get the parsed data formatted someway.</p>

<code>npm install --save blsjs</code>

<code>
    import BLS from 'blsjs' || const BLS = require('blsjs');
</code>

## Functions Available

- All arguments are strings

- specificIndustryLocalData
    <code>
        BLS.specificIndustryLocalData(year, quarter, region, industry)
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
