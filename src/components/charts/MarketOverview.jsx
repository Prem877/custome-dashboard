import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MarketOverview = () => {
    var options = {

        chart: {
            type: 'bar',
            height: 270,
            width: '100%',
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            foreColor: "#646A71",
            fontFamily: 'DM Sans',
        },

        grid: {
            borderColor: '#F4F5F6',
        },

        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                borderRadius: 5,
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "last",
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],

            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'inherit',
                },
            },
            axisBorder: {
                show: false,
            },
            title: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'inherit',
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'inherit',
                },
            },
            title: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'inherit',
                }
            },
        },
        legend: {
            show: false,
            
        },

        colors: ['#826af9', '#9e86ff', '#d0aeff',],
        fill: {
            opacity: 1
        },
        dataLabels: {
            enabled: false,
        }
    };

    const series = [
        {
            name: 'OVERDUE',
            data: [44, 55, 41, 67, 22, 43, 44, 55,]
        },
        {
            name: 'SNOOZED',
            data: [13, 23, 20, 8, 13, 27, 13, 23,]
        },
        {
            name: 'COMPLETED',
            data: [11, 17, 15, 15, 21, 14, 11, 17]
        },
        {
            name: 'OVERDUE',
            data: [21, 15, 11, 14, 21, 15, 17, 11]
        }
    ];

    return <ReactApexChart options={options} series={series} type="bar" height={270} width="100%" />
}

export default MarketOverview
