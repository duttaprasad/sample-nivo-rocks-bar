import React, { Component } from 'react';
import './App.css';
import { ResponsiveBar } from '@nivo/bar'

class Bar extends Component {
  render() {
    return (
        (
              <div >
                <header >
                    <h1 className="App-title">Welcome to React </h1>
                    <i>by using nivo rocks - Bar Charts</i>
                </header>
            <div class="App">
                <ResponsiveBar
                    data={[
                        {
                            "Type Of Transaction": "Credit Card",
                            "Pohanka Lexus": 111,
                            "hot dogColor": "hsl(85, 70%, 50%)",
                            "Pohanka Acura": 627,
                            "burgerColor": "hsl(268, 70%, 50%)",
                            "Pohanka Infinity": 333,
                            "sandwichColor": "hsl(344, 70%, 50%)"

                        },
                        {
                            "Type Of Transaction": "Cash",
                            "Pohanka Lexus": 234,
                            "hot dogColor": "hsl(0, 70%, 50%)",
                            "Pohanka Acura": 387,
                            "burgerColor": "hsl(140, 70%, 50%)",
                            "Pohanka Infinity": 999,
                            "sandwichColor": "hsl(28, 70%, 50%)"
                        },
                        {
                            "Type Of Transaction": "Cheque",
                            "Pohanka Lexus": 757,
                            "hot dogColor": "hsl(220, 70%, 50%)",
                            "Pohanka Acura": 423,
                            "burgerColor": "hsl(62, 70%, 50%)",
                            "Pohanka Infinity": 545,
                            "sandwichColor": "hsl(158, 70%, 50%)"
                        }
                    ]
                    }
                    keys={[
                        "Pohanka Lexus",
                        "Pohanka Acura",
                        "Pohanka Infinity"
                    ]}
                    indexBy="Type Of Transaction"
                    margin={{
                        "top": 70,
                        "right": 200,
                        "bottom": 100,
                        "left": 60
                    }}
                    padding={0.5}
                    colors="nivo"
                    colorBy="id"
                    defs={[
                        {
                            "id": "dots",
                            "type": "patternDots",
                            "background": "inherit",
                            "color": "#38bcb2",
                            "size": 4,
                            "padding": 1,
                            "stagger": true
                        },
                        {
                            "id": "lines",
                            "type": "patternLines",
                            "background": "inherit",
                            "color": "#eed312",
                            "rotation": -45,
                            "lineWidth": 6,
                            "spacing": 10
                        }
                    ]}
                    fill={[
                        {
                            "match": {
                                "id": "Pohanka Lexus"
                            },
                            "id": "dots"
                        },
                        {
                            "match": {
                                "id": "Pohanka Infinity"
                            },
                            "id": "lines"
                        }
                    ]}
                    borderColor="inherit:darker(1.6)"
                    axisBottom={{
                        "orient": "bottom",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "Type Of Transaction",
                        "legendPosition": "center",
                        "legendOffset": 50
                    }}
                    axisLeft={{
                        "orient": "left",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "Count( In Rs)",
                        "legendPosition": "center",
                        "legendOffset": -50
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={[
                        {
                            "dataFrom": "keys",
                            "anchor": "bottom-center",
                            "direction": "row",
                            "translateX": 20,
                            "itemWidth": 100,
                            "itemHeight": 650,
                            "itemsSpacing": 55,
                            "symbolSize": 20
                        }
                    ]}
                />
            </div>
</div>
        )
    );
  }
}

export default Bar;
