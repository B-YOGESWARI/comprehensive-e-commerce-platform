 <script>
        function searchBooks() {
            var isbnInput, titleInput, authorInput, isbnFilter, titleFilter, authorFilter, table, tr, td, i, isbnValue, titleValue, authorValue;
            isbnInput = document.getElementById("isbnInput");
            titleInput = document.getElementById("titleInput");
            authorInput = document.getElementById("authorInput");
            isbnFilter = isbnInput.value.toUpperCase();
            titleFilter = titleInput.value.toUpperCase();
            authorFilter = authorInput.value.toUpperCase();
            table = document.getElementById("booksTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                isbnValue = tr[i].getElementsByTagName("td")[0].textContent || tr[i].getElementsByTagName("td")[0].innerText;
                titleValue = tr[i].getElementsByTagName("td")[1].textContent || tr[i].getElementsByTagName("td")[1].innerText;
                authorValue = tr[i].getElementsByTagName("td")[2].textContent || tr[i].getElementsByTagName("td")[2].innerText;
                if (isbnValue.toUpperCase().indexOf(isbnFilter) > -1 && 
                    titleValue.toUpperCase().indexOf(titleFilter) > -1 &&
                    authorValue.toUpperCase().indexOf(authorFilter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    </script>
</body>
</html>
