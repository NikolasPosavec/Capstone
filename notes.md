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

# dump machine code
xxd -b hello_world

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

# dump machine code to a file
# +31 will vary... after you do disassemble command, you will see the correct offset
dump memory main_dump.bin main main+31

# if you re-compile, then reload the new executable binary

file calc

```