# turn on color, etc.
set style enabled on

# disassemble with symbols
disassemble /rm main

# dump machine code to a file
dump memory main_dump.bin main main+31