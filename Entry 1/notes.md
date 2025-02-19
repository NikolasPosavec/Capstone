# Overview

- compile to executable

```bash

# compile using gcc
gcc calc.c -o calc

# compile and include debug symbols
gcc -g calc.c -o calc

# execute it
./calc

```

- disassemble using objdump

```bash

# dump Intex x86 assembly
objdump -d calc

# display the machine code
xxd -b calc
```

- disassemble using gdb

```bash
#
# non-interactively
gdb -batch -x commands.gdb calc

#
# interactively

gdb calc

#disassemble
disassemble /rm main
# disassemble without symbols
disassemble /r main

# dump machine code to a file
# +31 will vary... after you do disassemble command, you will see the correct offset


# if you re-compile, then reload the new executable binary
file calc

```

- to view the machine code dump

```bash

# display the machine code
xxd -b main_dump.bin

```
