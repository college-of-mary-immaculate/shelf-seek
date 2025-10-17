import time
import bookbrains


query = "ann patchett"

print("Query: ", query)

start = time.time()
results = bookbrains.get_database_document(query)

print("Time:", round(time.time() - start, 3), "s")