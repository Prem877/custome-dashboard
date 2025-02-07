import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const NetProfitChart = () => {

    const options = {

        chart: {
            height: 250,
            type: 'radar',
            foreColor: "#646A71",
            toolbar: {
                show: false
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            markers: {
                size: 5,
            },
        },
        stroke: {
            width: 2
        },
        fill: {
            opacity: 0.1
        },
        markers: {
            size: 0
        },
        yaxis: {
            stepSize: 20
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        }
    };

    const series = [{
        name: 'Sales',
        data: [54, 45, 60, 70, 54, 75, 60, 54],
    }, {
        name: 'Orders',
        data: [65, 75, 70, 80, 60, 80, 36, 60],
    },]

    return <ReactApexChart options={options} series={series} type="radar" height={250} />

}

export default NetProfitChart
