import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

/*Apex sparkline Chart*/

if (typeof window !== "undefined") {
    window.Apex = {
        stroke: {
            width: 2
        },
        markers: {
            size: 0
        },
        tooltip: {
            fixed: {
                enabled: true,
            }
        }
    };
}

var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/************************************************* Sparkline Chart1 **************************************************/
// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

const optionsSpark1 = {

    chart: {
        type: 'area',
        width: 100,
        height: 35,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight'
    },
    fill: {
        opacity: 0.3
    },
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    yaxis: {
        min: 0
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

const seriesSpark1 = [{
    data: randomizeArray(sparklineData)
}];

export const LineChart1 = () => (
    <>
        <ReactApexChart options={optionsSpark1} series={seriesSpark1} type="area" width={100} height={35} />
    </>
);

/************************************************* Sparkline Chart2 **************************************************/
const optionsSpark2 = {

    chart: {
        type: 'area',
        width: 100,
        height: 35,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight'
    },
    fill: {
        opacity: 0.3
    },
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    yaxis: {
        min: 0
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

const seriesSpark2 = [{
    data: randomizeArray(sparklineData)
}];

export const SparklineChart2 = () => (
    <>
        <ReactApexChart options={optionsSpark2} series={seriesSpark2} type="area" width={100} height={50} />
    </>
);


/************************************************* Sparkline Chart3 **************************************************/
const optionsSpark3 = {

    chart: {
        type: 'area',
        width: 100,
        height: 35,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight'
    },
    fill: {
        opacity: 0.3
    },
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    yaxis: {
        min: 0
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
const seriesSpark3 = [{
    data: randomizeArray(sparklineData)
}];
export const SparklineChart3 = () => (
    <>
        <ReactApexChart options={optionsSpark3} series={seriesSpark3} type="area" width={100} height={35} />
    </>
);


/************************************************* Sparkline Chart4 **************************************************/
const optionsSpark4 = {

    chart: {
        type: 'area',
        width: 100,
        height: 35,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight'
    },
    fill: {
        opacity: 0.3
    },
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    yaxis: {
        min: 0
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};
const seriesSpark4 = [{
    data: randomizeArray(sparklineData)
}];

export const SparklineChart4 = () => (
    <>
        <ReactApexChart options={optionsSpark4} series={seriesSpark4} type="area" width={100} height={35} />
    </>
);
