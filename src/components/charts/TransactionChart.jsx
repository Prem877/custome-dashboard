import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TransactionChart = () => {


    const options = {
        chart: {
            type: 'area',
            height: 120,
            zoom: {
                enabled: false
            },
            foreColor: "#646A71",
            toolbar: {
                show: false
            }
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

        labels: ["Jan", "Feb", "Mar", "Apr", "May",],

        xaxis: {
            labels: {
                show: false
            },
        },
        yaxis: {
            labels: {
                show: false
            },
        },
        fill: {
            colors: ['#fa394e']
        }

    };

    const series = [{
        name: "STOCK ABC",
        data: [320, 280, 300, 280, 300, 270]
    }]

    return <ReactApexChart options={options} series={series} type="area" height={120} />
}

export default TransactionChart
