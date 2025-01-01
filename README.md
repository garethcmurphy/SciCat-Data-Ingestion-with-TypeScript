# SciCat Data Ingestion with TypeScript 📥✨  

This repository provides a **TypeScript-based tool** for importing and ingesting data into **SciCat**, the science data catalog used at the **European Spallation Source (ESS)**.

---

## Features ✨  

- **Data Ingestion**: Automates data import into SciCat.  
- **TypeScript Implementation**: Ensures type safety and maintainable code.  
- **Configurable**: Easily adjust for different data sources and formats.  

---

## Prerequisites 🛠️  

- Node.js (14+ recommended).  
- Access to a SciCat instance.  

---

## Installation  

1. Clone the repository:  
   git clone https://github.com/your-username/scicat-ingestion.git  
   cd scicat-ingestion  

2. Install dependencies:  
   npm install  

---

## Usage 🔧  

1. Update `config.json` with your SciCat API endpoint and credentials.  

2. Run the ingestion script:  
   npm start  

3. Monitor the console for ingestion logs and error messages.  

---

## Configuration  

- **API Settings**: Configure the SciCat API URL and authentication in `config.json`.  
- **Data Source**: Adjust the script to match your data source structure.  

---

## File Structure 📂  

- `src/`: TypeScript source code.  
  - `ingest.ts`: Main script for data ingestion.  
  - `config.json`: Configuration file for SciCat API details.  
- `package.json`: Node.js project configuration.  
- `README.md`: Documentation for the repository.  

---

## Example Commands  

- Run the ingestion script:  
  npm start  

- Check logs for errors or success messages.  

---

## Contributing 🤝  

1. Fork the repository.  
2. Create a new branch:  
   git checkout -b feature/your-feature  

3. Commit your changes:  
   git commit -m "Add your feature"  

4. Push the branch:  
   git push origin feature/your-feature  

5. Open a pull request.  

---

## License 📝  

This project is licensed under the MIT License. See the LICENSE file for details.  

---

**Easily ingest data into SciCat with this TypeScript-based tool!** 📥✨  
