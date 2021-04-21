import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import {
    curveCatmullRom,
    line,
} from 'd3-shape';
import { scalePoint } from 'd3-scale';

const Line = props => (
    <LineSeries.Path
        {...props}
        path={line()
            .x(({ arg }) => arg)
            .y(({ val }) => val)
            .curve(curveCatmullRom)}
    />
);

// const titleStyles = {
//     title: {
//         textAlign: 'center',
//         width: '100%',
//         marginBottom: '10px',
//     },
// };
// const Text = withStyles(titleStyles)((props) => {
//     const { text, classes } = props;
//     const [mainText, subText] = text.split('\\n');
//     return (
//         <div className={classes.title}>
//             <Typography component="h3" variant="h5">
//                 {mainText}
//             </Typography>
//             <Typography variant="subtitle1">{subText}</Typography>
//         </div>
//     );
// });

// const legendStyles = () => ({
//     root: {
//         display: 'flex',
//         margin: 'auto',
//         flexDirection: 'row',
//     },
// });
// const legendLabelStyles = theme => ({
//     label: {
//         marginBottom: theme.spacing(1),
//         whiteSpace: 'nowrap',
//     },
// });
// const legendItemStyles = () => ({
//     item: {
//         flexDirection: 'column-reverse',
//     },
// });
//
// const legendRootBase = ({ classes, ...restProps }) => (
//     <Legend.Root {...restProps} className={classes.root} />
// );
// const legendLabelBase = ({ classes, ...restProps }) => (
//     <Legend.Label className={classes.label} {...restProps} />
// );
// const legendItemBase = ({ classes, ...restProps }) => (
//     <Legend.Item className={classes.item} {...restProps} />
// );
// const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
// const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
// const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const demoStyles = () => ({
    chart: {
        padding: '30px 5px 50px 5px',
        width: '80%',
    }
});

class ViewsChart extends React.PureComponent {

    render() {
        const { data: chartData } = this.props;
        const { classes } = this.props;

        return (
            <Paper>
                <Chart
                    data={chartData}
                    className={classes.chart}
                >
                    <ArgumentScale factory={scalePoint} />
                    <ArgumentAxis />
                    <ValueAxis />

                    <LineSeries
                        name="Clicks quantity"
                        valueField="page_views"
                        argumentField="date"
                        seriesComponent={Line}
                    />
                    {/*<Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />*/}
                    {/*<Title*/}
                    {/*    text="Clicks made quantity"*/}
                    {/*    textComponent={Text}*/}
                    {/*/>*/}
                    {/*<Animation />*/}
                </Chart>
            </Paper>
        );
    }
}

export default withStyles(demoStyles, { name: 'Demo' })(ViewsChart);