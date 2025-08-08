# The first Prototype

There is a light non Technical Blog Post about this Topic here [Blog Post](./../../../blog/DLRGTracking.md)

## Hardware Design Goals
The following design goals must be met for this system:
1. **Waterproof**: The device should be able to withstand various environmental conditions, including water exposure.
2. **Cost-Effective**: Given the potential need for large quantities, the solution should aim to minimize costs without compromising functionality or reliability.
3. **Usable Headless & with a Phone**: The device should be operable both independently (headless) and in conjunction with a phone, offering flexibility in its use.

## Components
The system will consist of the following components:
- **Computing Module**: Xiao ESP32S3 for processing and controlling the system.
- **LoRaWAN Transmitter**: Wio-SX1262 for long-range communication.
- **Connector**: SMA to I-pEX antenna connector for secure connection to the antenna.
- **Antenna**: Suitable for 868MHz LoRa communication. (EU)
- **GPS Module**: Initially considered L76K GNSS Module for XIAO, but open to alternatives that meet requirements and budget constraints.
- **Compass Module**: Not required as heading information is not necessary for this application.
- **Battery Management**: Needs to be defined, with 18650 batteries (3500 mAh) being a potential option.
- **Form Factor / Waterproof Housing**: Utilizing designs such as https://www.printables.com/model/971362-waterproof-capsule or 32 HT Pipe with End Caps for waterproofing and durability.

## Cost Analysis: Is Self-Build Worth It?
To evaluate the feasibility of self-building this system, a cost analysis has been conducted. The initial estimate includes:
### First Prototype List
| Component | Name                 | Price Each | Quantity | Total   |
|-----------|----------------------|------------|----------|---------|
| Core      | ESP32 S3 mit SX126   | ~9,89€     | 5x       | 49,39€  |
| Battery   | 18650 3500 mAh       |            | 6x       | 12,99€  |
| Antenna   | 915MHz LoRa Antenne  |            | 6x       | 21,54€  |
| GPS       | XIAO-L76K-GNSS-Board | 10,19€     | 5x       | 50,95€  |
|           |                      |            |          |         |
|           | Total                | 26,97€     | 5x       | 134,87€ |

### Alternative with Cheaper GPS Module
Using a more affordable GPS module:

| Component | Name                 | Price Each | Quantity | Total  |
| --------- | -------------------- | ---------- | -------- | ------ |
| Core      | ESP32 S3 mit SX126   | ~9,89€     | 5x       | 49,39€ |
| Battery   | 18650 3500 mAh       |            | 6x       | 12,99€ |
| Antenna   | 915MHz LoRa Antenne  |            | 6x       | 21,54€ |
| GPS       | GY-NEO6MV2 GPS-Modul | 2,69€      | 5x       | 13,45€ |
|           |                      |            |          |        |
|           | Total                | 19,47€     | 5x       | 97,37€ |

This analysis suggests that self-building the system could be a cost-effective approach, especially with careful selection of components to meet both functional and budgetary requirements.

# Housing

## Prototype

![](/blog/Tracker/Tracker.png)

![](/blog/Tracker/TrackerExplo.png)

# Whitebox Model

To be done...

# Learnings

To be done...
