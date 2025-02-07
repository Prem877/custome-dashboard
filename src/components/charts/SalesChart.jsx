import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SalesChart = () => {

    const options = {

        chart: {
            height: 250,
            type: 'area',
            foreColor: "#646A71",
            toolbar: {
                show: false
            }
        },
        legend: {
            markers: {
                size: 5,
            },
        },
        grid: {
            borderColor: '#F4F5F6',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
            labels: {
                show:false
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'inherit',
                    fontWeight: 500,
                },
            },

        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    };

    const series = [{
        name: 'Revenue',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Sales',
        data: [11, 32, 45, 32, 34, 52, 41]
    }]

    return <ReactApexChart options={options} series={series} type="area" height={250} />

}

export default SalesChart
