{
    "codecaves": {
        "anm_int_var_table_copy_direct": {
            "code": "\
cd 21 46 00 d4 21 46 00 db 21 46 00 e2 21 46 00 \
e9 21 46 00 f4 21 46 00 ff 21 46 00 0a 22 46 00 \
15 22 46 00 1c 22 46 00 40 22 46 00 23 22 46 00 \
2e 22 46 00 39 22 46 00 62 22 46 00  \
<codecave:POWER> \
            "
        },
        "anm_int_var_table_copy_indirect": {
            "code": "\
00 01 02 03 04 05 06 07 08 09 0e 0e 0e 0e 0e 0e \
0e 0e 0e 0e 0e 0e 0a 0e 0e 0e 0e 0b 0c 0d 0f \
\
            "
        },
        "POWER": { // 0f
            "code": "\
8B 05 <Rxbe7e8> \
C3 \
            "
        },
    },
    "binhacks": {
        "anm_i_global_jmp_bounds": { // same thing here
            "addr": "0x4621b6", // 29 / 1d base
            "code": "83 fa 1e" // 32
        },
        "anm_int_var_jmp_table": {
            "addr": "0x4621bf",
            "code": "0FB6 92 <codecave:anm_int_var_table_copy_indirect> FF 24 95 <codecave:anm_int_var_table_copy_direct>"
        },
    }
}