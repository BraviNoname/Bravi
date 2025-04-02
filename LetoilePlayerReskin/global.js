{
    "options": {
        "warn_missing_zecl_caption": {
            "type": "s",
            "val": "Dependency Error"
        },
        "warn_missing_zecl_message": {
            "type": "s",
            "val": "This patch needs \"zero318/ZeroEclExtensions\" installed to work correctly. Please use the config tool to recreate your config and thcrap will install the missing dependency for you."
        }
    },
    "codecaves": {
        "warn_missing_zecl_patch_init": {
            "ignore": "<patch:ZeroEclExtensions>",
            "access": "re",
            "export": true,
            "code": "\
68 <option:warn_missing_zecl_message> \
6A 10 \
68 <option:warn_missing_zecl_caption> \
E8 [log_mbox] \
83C4 0C \
C3 \
"
        }
    }
}