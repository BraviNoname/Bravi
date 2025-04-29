{
	"codecaves": {
		"ANM_INT_VAR_COPY_DIRECT":  {   
            "code": "\
33 f6 45 00 3d f6 45 00 47 f6 45 00 51 f6 45 00 \
5b f6 45 00 67 f6 45 00 73 f6 45 00 7f f6 45 00 \
af f6 45 00 b9 f6 45 00 e5 f6 45 00 c3 f6 45 00 \
cf f6 45 00 db f6 45 00 8b f6 45 00 97 f6 45 00 \
a3 f6 45 00 08 f7 45 00 <codecave:POWER_VARIABLE> <codecave:SUBSEASON_VARIABLE> \
            ",
		},
		"ANM_INT_VAR_COPY_INDIRECT": {   
            "access": "re",
            "code": "\
00 01 02 03 04 05 06 07 08 09 11 11 11 11 11 11 \
11 11 11 11 11 11 0a 11 11 11 11 0b 0c 0d 11 11 \
11 0e 0f 10 12 13 11\
            ",
        },
        "POWER_VARIABLE": { // 12
            "access": "re",
            "code": "\
8B 05 <0x4A57E4> \
5D \
C2 0400 \
        ",
    },
        "SUBSEASON_VARIABLE": { // 13
            "access": "re",
            "code": "\
8B 05 <0x4a57ac> \
5D \
C2 0400 \
        ",
    },
	},
	"binhacks": {
        "anm_int_var_jmp_check_change": {
            "addr": "0x45f61c", 
            "code": "83 F8 24"
        },
        "anm_int_var_table_replace": {
            "addr": "0x45f625", 
            "code": "0FB6 80 <codecave:ANM_INT_VAR_COPY_INDIRECT> FF 24 85 <codecave:ANM_INT_VAR_COPY_DIRECT>"
        },
	}
}
