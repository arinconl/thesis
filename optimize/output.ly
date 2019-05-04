\version "2.18.2"
\pointAndClickOff
\header {
  title = Results
}
\score
  {
  <<
  \new Staff = "up" {
    s4 s4 s4 s4 s4 s4 ees'_\markup { -6 } e'^\markup { 10 } g'_\markup { -3 } a'^\markup { 37 } des''^\markup { 26 } ees''^\markup { 4 } f''_\markup { -49 } aes''_\markup { -23 } a''^\markup { 31 } b''_\markup { -38 } des'''_\markup { -30 } des'''^\markup { 32 } d'''_\markup { -49 } ees'''^\markup { 28 } 
  }
  \new Staff = "down" {
    \clef bass {
      a,,,_\markup { -30 } des,^\markup { 13 } f,_\markup { -37 } c^\markup { 24 } g_\markup { -29 } a^\markup { 39 } s4 s4 s4 s4 s4 s4 s4 s4 s4 s4 s4 s4 s4 s4 
    }
  }
  >>
  \header {
    piece = "All Notes"
  }
}
\score
  {
  <<
  \new Staff = "up" {
    ees'1_\markup { -6 } ees''4^\markup { 4 } \bar "|."
ees''1^\markup { 4 } ees'4_\markup { -6 } \bar "|."

  }
  \new Staff = "down" {
    \clef bass {
      s1 s4 \bar "|."
s1 s4 \bar "|."

    }
  }
  >>
  \header {
    piece = "Harmonics by Octave"
  }
}
\score
  {
  <<
  \new Staff = "up" {
    s1 g'4_\markup { -3 } b''4_\markup { -38 } \bar "|."
s1 a'4^\markup { 37 } f''4_\markup { -49 } a''4^\markup { 31 } des'''4^\markup { 32 } \bar "|."
ees'1_\markup { -6 } ees''4^\markup { 4 } \bar "|."
a'1^\markup { 37 } a''4^\markup { 31 } \bar "|."
des''1^\markup { 26 } des'''4^\markup { 32 } d'''4_\markup { -49 } \bar "|."
ees''1^\markup { 4 } ees'''4^\markup { 28 } \bar "|."
a''1^\markup { 31 } s4 \bar "|."
b''1_\markup { -38 } s4 \bar "|."
des'''1_\markup { -30 } s4 \bar "|."
des'''1^\markup { 32 } s4 d'''4_\markup { -49 } \bar "|."
d'''1_\markup { -49 } s4 des'''4^\markup { 32 } \bar "|."
ees'''1^\markup { 28 } s4 \bar "|."

  }
  \new Staff = "down" {
    \clef bass {
      g1_\markup { -29 } s4 s4 \bar "|."
a1^\markup { 39 } s4 s4 s4 s4 \bar "|."
s1 s4 \bar "|."
s1 s4 \bar "|."
s1 s4 s4 \bar "|."
s1 s4 \bar "|."
s1 a,,,4_\markup { -30 } \bar "|."
s1 a,,,4_\markup { -30 } \bar "|."
s1 a,,,4_\markup { -30 } \bar "|."
s1 a,,,4_\markup { -30 } s4 \bar "|."
s1 a,,,4_\markup { -30 } s4 \bar "|."
s1 a,,,4_\markup { -30 } \bar "|."

    }
  }
  >>
  \header {
    piece = "Harmonics by Common Multiple"
  }
}
