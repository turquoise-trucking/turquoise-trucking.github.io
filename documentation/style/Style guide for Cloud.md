# Style guide for Cloud

Written 2021-03-18 by John Earl Hardesty

## Introduction

A style guide helps users adhere to a set of rules. For cloud storage it will answer questions like date and time formats, how to name files, so on. 

This guide assumes organization is by department.  

* **By department** makes folder structure important 
* **Long and shallow** makes filenames important
* **Hybrid approach** makes both important based on how shallow the file tree is

Regardless of how we organize, a style guide must be followed. 

## Naming conventions

**Departments** and **top level folders** should use **title case** excluding articles

> Accounts Payable
>
> DOT Inspections

**Sub folders** should be **sentence case**

> Rachel's files

**Folders** should show **plurality**

> Turquoise Setup Packet
>
> Broker Setup Packets

**Spaces** should be used between words in **folders** and **files**

> Expense Report
>
> 2020-10-23 Full report.pdf

Do not begin or end folder and files names with a space. Nor place spaces before, after, or inside file extensions. 

**Numeration** should use digits not words

> photo1.jpeg

**Files** should be **terse** yet descriptive and use **title or sentence case**

> Accident photo 1.jpeg
>
> 06-15 Al Inspection.pdf
>
> 01-23 Ricky fuel receipt.pdf

**Capitalize proper nouns**

> Echo Global Logistics setup packet.pdf
>
> 2025-01-01 Al Cooker CDL.pdf

**Include unit number with company driver names**. Due to the nature of how company trucks are assigned, it makes sense to include the truck and trailer number along with the drivers name. 

## Dates

For both folders and files, dates should be in [ISO-8601 format](https://en.wikipedia.org/wiki/ISO_8601). That means March 16, 2021 would appear as 2021-03-16

> 2020-06-04 IFTA receipt.pdf

**Examples of the date March 16 2021**

Dates that include a year

* **YYYY-MM-DD**

* 2021-03-16

Dates without a year should only be used when their parent folder contains the year

* **MM-DD**

* 03-16

Dates as weeks

* **YYYY-W#**
* 2021-W11

**Use expiration dates** on documents that have a lifespan; such as CDLs and medical cards

> 2028-04-25 Salih medical card.pdf

**Do not truncate** leading zeros

* Always use a 4 digit year such as 2021
* January through September should begin with a 0

**Start files with a date** if they have a lifespan. You may also start files with a date when the date is a critical aspect of the file. For example, if the folder contains inspections that are dated they should start with the date. **This rule may change based on organization scheme**.

> ✔️ 2022-04-34 Lisa inspection.pdf
>
> ❌ Lisa inspection 2022-04-23.pdf

If there are a significant number of files with dates in a folder, you may create a folder structure by exploding the date. For example, if there are over 50 documents for 2021 in a folder you could break them up by month.

> Sample Folder
>
> * 2021
>   * 01
>   * 02
>   * 03
>     * File.pdf

## Time

In general, time should only be used as the title of a filename and not a folder.

We assume:

* **24 hour time** with a leading zero for hours before 10:00
* **US Central time** with Daylight Savings Time enforced based on date
* Seconds are not needed

## Punctuation

**Avoid using punctuation** for folder names and files

The only except to this should be dates

This is easier to read

> ✔️ 2020-04-23 Some Company.pdf 

Than this

> ❌ 20200423 Some Company, inc..pdf 

## Scanning Documents

**Scanning instructions for Dropbox, Adobe Scan, and ScanSnap pending.**

**Do not scan a copied page**. To ensure document quality always scan the object of interest, whether a license or another document. You shouldn't use the copier to scan an object, then make a scan of that copied page. 

**Do not combine multiple items with different expirations**. A CDL and a medical shouldn't be scanned together because they expire on different dates. They should be separate documents.



## PDF files

This section includes recommendations for editing PDF files. Unless stated, most of this section requires a commercial license of [Adobe Acrobat Pro DC](https://acrobat.adobe.com/us/en/acrobat/acrobat-pro.html) or [Adobe Acrobat Pro 2020](https://www.adobe.com/products/catalog.html#category=pdf).

### Correcting sideways and upside-down scans

All PDFs should be properly oriented, with all text readable without tilting your head. Incorrect orientation occurs when scanning software confuses which direction the document is facing. 

***Acrobat Pro instructions pending.***

This can be fixed in certain situations with [LibreOffice Draw](https://www.libreoffice.org/discover/draw/)

1. Open the PDF from the menu command File > Open...
2. If the document is on its side
   1. Open the Page Setup window from the menu command Page > Properties
   2. Under Paper Format and Orientation, click the Portrait radio button and press the OK button
   3. The document is now oriented correctly but the page contents is not
   4. If the document was scanned as a photograph (the entire page can be clicked as one object)
      * Right-click the page and choose Position and Size...
      * In the Rotation tab, change the rotation angle.

### Making PDFs Searchable and Selectable

The power of PDF files is the ability to search for specific words and selecting text. For this to work a PDF must contain text. Some PDFs may look like they do, however when you try to select text the entire page may turn blue. These PDFs were scanned and are actually photos. In order to make the document searchable and selectable we must run [optical character recognition](https://en.wikipedia.org/wiki/Optical_character_recognition) (OCR) on it.

To OCR a document it must be scanned by an app (such as [Adobe Scan](https://acrobat.adobe.com/us/en/mobile/scanner-app.html) or [Dropbox Mobile](https://help.dropbox.com/installs-integrations/mobile/document-scanning)). PDFs can also be OCRed using Acrobat Pro.

***Acrobat pro instructions pending.***

## Changelog

2021-03-19

* This style guide was split from the original Cloud Storage document

* Scanning Documents section added

  

