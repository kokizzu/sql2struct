import { kv } from "./type";

// default sql to go struct field maps
export const defaultFieldMaps: kv = {
    'tinyint': 'int8',
    'smallint': 'int16',
    'mediumint': 'int32',
    'int': 'int64',
    'bigint': 'int64',
    'float': 'float32',
    'double': 'float64',
    'decimal': 'float64',
    'char': 'string',
    'varchar': 'string',
    'text': 'string',
    'mediumtext': 'string',
    'longtext': 'string',
    'time': 'time.Time',
    'date': 'time.Time',
    'datetime': 'time.Time',
    'timestamp': 'int64',
    'enum': 'string',
    'set': 'string',
    'blob': 'string'
}