const industryCodes = require('./utils/industryCodes').industryCodes;
const regionalCodes = require('./utils/regionalCodes').regionalCodes;
var dsv = require('d3-dsv');
var rp = require('request-promise');
var Promise = require('bluebird');

function qcewRequest(urlPath, callback){
  var formatters = {
    json: function(body){
      return dsv.csvParse(body);
    }
  };

  rp(urlPath)
  .then(response => {
    var data;
    data = formatters['json'](response);
    callback(null, data);
  })
  .catch(err => {
    callback(err);
  })
};

getAreaData = (year, qtr, area, callback) => {
  const urlPath = `https://www.bls.gov/cew/data/api/${year}/${qtr}/area/${area}.csv`;
  qcewRequest(urlPath, callback);
};

getIndustryData = (year, qtr, industry, callback) => {
  const urlPath = `https://www.bls.gov/cew/data/api/${year}/${qtr}/industry/${industry}.csv`;
  qcewRequest(urlPath, callback);
};

getSizeData = (year, size, callback) => {
  const urlPath = `https://www.bls.gov/cew/data/api/${year}/${qtr}/size/${size}.csv`;
  qcewRequest(urlPath, callback);
};

getSpecificIndustryNationalData = (info, callback) => {
  getAreaData(info[0], info[1], info[2], (err, areaData) => {
    if(err) throw err;
    callback(areaData.filter(element => element.industry_code === info[3]));
  });
};

getAllNationalData = (info, callback) => {
  getAreaData(info[0], info[1], info[2], (err, areaData) => {
    if(err) throw err;
    callback(areaData);
  });
};

getSpecificIndustryLocalData = (info, callback) => {
  getAreaData(info[0], info[1], info[2], (err, areaData) => {
    if(err) throw err;
    callback(areaData.filter(element => element.industry_code === info[3]));
  });
};

getAllLocalData = (info, callback) => {
  getAreaData(info[0], info[1], info[2], (err, areaData) => {
    if(err) throw err;
    callback(areaData);
  });
};

specificIndustryLocalData = (year, quarter, region, industry) => {
  return new Promise((resolve, reject) => {
    getSpecificIndustryLocalData([year, quarter, region, industry], (d) => {
      resolve(d);
    })
  })
  .then(result => {
    console.log(result);
    return result;
  });
}

allLocalData = (year, quarter, region) => {
  return new Promise((resolve, reject) => {
    getAllLocalData([year, quarter, region], (d) => {
      resolve(d);
    })
  })
  .then(result => {
    console.log(result);
    return result;
  });
}

nationalIndustryData = (year, quarter, industry) => {
  return new Promise((resolve, reject) => {
    getSpecificIndustryNationalData([year, quarter, 'US000', industry], (d) => {
      resolve(d);
    })
  })
  .then(result => {
    console.log(result);
    return result;
  });
};

allIndustriesNationalData = (year, quarter) => {
  return new Promise((resolve, reject) => {
    getAllNationalData([year, quarter, 'US000'], (d) => {
      resolve(d);
    })
  })
  .then(result => {
    console.log(result);
    return result;
  });
};

allRegionalCodes = () => {
  console.log({_RegionalCodes: regionalCodes});
  return {_RegionalCodes: regionalCodes};
}

allIndustryCodes = () => {
  console.log({_IndustrialCodes: industryCodes});
  return {_IndustrialCodes: industryCodes};
}


module.exports = {
  specificIndustryLocalData,
  allLocalData,
  nationalIndustryData,
  allIndustriesNationalData,
  allRegionalCodes,
  allIndustryCodes
}
