import bookbrains

bookbrains.prepare_data(
    force_rebuild =  True,
    remove_primary_keys = True,
    vectorize = True,
    database_insert = True,
)