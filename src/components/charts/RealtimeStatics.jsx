import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RealtimeStatics = () => {
    var options = {

        chart: {
            type: 'bar',
            height: 200,
            width: 200,
            stacked: true,
            offsetX: -40,
            offsetY: -85,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
        },

        grid: {
            show: false
        },

        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '35%',
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr"],

            labels: {
                show: false
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
                maxWidth: 0,
            },
            axisTicks: {
                show: false
            }
        },
        legend: {
            show: false,

        },

        colors: ['#0f5bff', '#e5e9f2'],
        fill: {
            opacity: 1
        },
        dataLabels: {
            enabled: false,
        }
    };

    const series = [
        {
            name: 'Profit',
            data: [330, 380, 230, 400, 309, 530, 340]
        },
        {
            name: 'Target',
            data: [600, 600, 600, 600, 600, 600, 600],
        },
    ];

    return <ReactApexChart options={options} series={series} type="bar" height={200} width={200} />
}

export default RealtimeStatics
