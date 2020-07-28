## FMEA

The team conducted a [Failure Mode and Effects Analysis](https://github.com/cionicwear/vent/blob/master/analysis/VOX_FMEA.xlsx) to determine areas of risk with this reference design


## Ventilator Mode Testing

Ventilator modes  tested using refrence equipment from AD Instruments and MGH/Ximedica (listed in table below)  
That data was then exported for anlysis vs. system diagnostics generated by the VOX vent  
And compared in Jupyter notebooks [vent.ipynb](analysis/vent.ipynb) to generate pdf reports (linked in table below)

|   Pressure Transducer                                |   ADInstruments   |   Measure the air pressure.                                                     | Tidal Volume ml | Breaths / min (a) | Inspire time (s) | O2 | BAP (PEEP) | I:E |
|------------------------------------------------------|-------------------|---------------------------------------------------------------------------------|-----------------|-------------------|------------------|----|------------|-----|
|   FE221 Bridge Amp                                   |   ADInstruments   |   Sends data from pressure transducer to PowerLab.                              | 500             | 20                | 1                | 30 | 5          | 1:2 |
|   Cables                                             |   ADInstruments   |   Used to connect amp to PowerLab.                                              | 500             | 12                | 1                | 90 | 10         | 1:4 |
|   MLT1000 Flow Head                                  |   ADInstruments   |   Used to measure air flow.                                                     | 500             | 20                | 1                | 90 | 5          | 1:2 |
|   Flow Head Tubing                                   |   ADInstruments   |   Connects between flow head and spirometer.                                    | 500             | 20                | 1                | 30 | 10         |     |
|   ML311 Spirometer Pod                               |   ADInstruments   |   Measures the flow rate of air for other calculations.                         | 300             | 20                | 1                | 30 | 5          |     |
|   PowerLab                                           |   ADInstruments   |   Collects data and sends to LabChart.                                          | 300             | 12                | 1                | 90 | 10         | 1:3 |
|   LabChart License                                   |   ADInstruments   |   Used to collect, display, and analyze data.                                   | 300             | 20                | 1                | 30 | 10         |     |
|   IngMar Medical QuickLung Test Lung or Equivalent   |   MGH/Ximedica    |   Has adjustable resistance and compliance to help simulate a person’s lungs.   | 200             | 20                | 1                | 90 | 5          |     |

### Pressure Control Testing


|   | Compliance ml/hPa ±10%                                                       | Resistance  hPa/l/s ±10% | Tidal Volume ml (a) | Breaths / min (b) | Inspire time (s) (c) | O2 | BAP (PEEP) | Δ insp pressure (d) |
|---|------------------------------------------------------------------------------|--------------------------|---------------------|-------------------|----------------------|----|------------|---------------------|
| [ISO_PCV1](ISO_PCV1.pdf) | 50.                                                            | 5                        | 500                 | 20                | 1                    | 30 | 5          | 10                  |
| [ISO_PCV2](ISO_PCV2.pdf) | 50                                                                           | 20                       | 500                 | 12                | 1                    | 90 | 10         | 15                  |                                     |
| ISO_PCV3 | 20                                                                           | 5                        | 500                 | 20                | 1                    | 90 | 5          | 25                  |


### Volume Control Testing

|      | Compliance ml/hPa ±10% | Resistance  hPa/l/s ±10% | Tidal Volume ml | Breaths / min (a) | Inspire time (s) | O2 | BAP (PEEP) | I:E |
|------|------------------------|--------------------------|-----------------|-------------------|------------------|----|------------|-----|
| [ISO1](ISO1.pdf)    | 50                     | 5                        | 500             | 20                | 1                | 30 | 5          | 1:2 |
| [ISO2](ISO2.pdf)   | 50                     | 20                       | 500             | 12                | 1                | 90 | 10         | 1:4 |
| [ISO3](ISO3.pdf)   | 20                     | 5                        | 500             | 20                | 1                | 90 | 5          | 1:2 |
| 4    | 20                     | 20                       | 500             | 20                | 1                | 30 | 10         |     |
| 5    | 20                     | 20                       | 300             | 20                | 1                | 30 | 5          |     |
| 6    | 20                     | 50                       | 300             | 12                | 1                | 90 | 10         | 1:3 |
| 7    | 10                     | 50                       | 300             | 20                | 1                | 30 | 10         |     |
| 8    | 10                     | 10                       | 200             | 20                | 1                | 90 | 5          |     |
| [C200](C200.pdf)  | 50                     | 5                        | 200             | 15                | 1                | 20 | 5          | 1:3 |
| C300 | 50                     | 5                        | 300             | 15                | 1                | 20 | 5          | 1:3 |
| C400 | 50                     | 5                        | 400             | 15                | 1                | 20 | 5          | 1:3 |
| C500 | 50                     | 5                        | 500             | 15                | 1                | 20 | 5          | 1:3 |
| C600 | 50                     | 5                        | 600             | 15                | 1                | 20 | 5          | 1:3 |
| [P15](P15.pdf)  | 50                     | 5                        | 500             | 10                | 1                | 20 | 15         | 1:5 |
| [R30](R30.pdf)  | 50                     | 5                        | 200             | 30                | 1                | 20 | 5          | 1:1 |

