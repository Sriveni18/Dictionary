// json2html.js
export default function json2html(data) {
    // Create the table opening tag with the data-user attribute
    let tableHTML = '<table data-user="srivenideshetty3@gmail.com">';
    
    // Add the table header (thead) with column names
    tableHTML += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
    
    // Add the table body (tbody)
    tableHTML += '<tbody>';
    
    // Iterate over the data and create a row for each object in the array
    data.forEach(item => {
        tableHTML += '<tr>';
        tableHTML += `<td>${item.Name}</td><td>${item.Age}</td>`;
        
        // Check if Gender exists, if so, add it, else leave the cell empty
        tableHTML += `<td>${item.Gender ? item.Gender : ''}</td>`;
        tableHTML += '</tr>';
    });
    
    // Close the table
    tableHTML += '</tbody></table>';
    
    // Return the final HTML table as a string
    return tableHTML;
}
