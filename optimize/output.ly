\version "2.18.2"
\pointAndClickOff
\header {
  title = Results
}
\score
  {
  <<
  \new Staff = "up" {
    s4 s4 s4 s4 s4 s4 des'^\markup { 9 } f'_\markup { -23 } ges'^\markup { 8 } aes'_\markup { -6 } c''_\markup { -10 } d''^\markup { 13 } ees''_\markup { -34 } f''_\markup { -50 } g''_\markup { -25 } a''^\markup { 30 } b''^\markup { 38 } c'''^\markup { 11 } d'''_\markup { -8 } ees'''^\markup { 46 } 
  }
  \new Staff = "down" {
    \clef bass {
      e,,,^\markup { 42 } b,,^\markup { 3 } ges,^\markup { 25 } b,^\markup { 32 } ees_\markup { -28 } a^\markup { 19 } s4 s4 s4 s4 s4 s4 s4 s4 s4 s4 s4 s4 s4 s4 
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
    c''1_\markup { -10 } c'''4^\markup { 11 } \bar "|."
c'''1^\markup { 11 } c''4_\markup { -10 } \bar "|."

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
    s1 ges'4^\markup { 8 } f''4_\markup { -50 } c'''4^\markup { 11 } \bar "|."
s1 des'4^\markup { 9 } \bar "|."
s1 b''4^\markup { 38 } \bar "|."
s1 ees''4_\markup { -34 } \bar "|."
s1 a''4^\markup { 30 } \bar "|."
f'1_\markup { -23 } f''4_\markup { -50 } \bar "|."
c''1_\markup { -10 } c'''4^\markup { 11 } \bar "|."
d''1^\markup { 13 } ees''4_\markup { -34 } d'''4_\markup { -8 } \bar "|."
ees''1_\markup { -34 } d''4^\markup { 13 } \bar "|."
f''1_\markup { -50 } s4 \bar "|."
g''1_\markup { -25 } s4 \bar "|."
a''1^\markup { 30 } s4 \bar "|."
b''1^\markup { 38 } s4 \bar "|."
c'''1^\markup { 11 } s4 \bar "|."
d'''1_\markup { -8 } s4 \bar "|."
ees'''1^\markup { 46 } s4 \bar "|."

  }
  \new Staff = "down" {
    \clef bass {
      b,,1^\markup { 3 } s4 s4 s4 \bar "|."
ges,1^\markup { 25 } s4 \bar "|."
b,1^\markup { 32 } s4 \bar "|."
ees1_\markup { -28 } s4 \bar "|."
a1^\markup { 19 } s4 \bar "|."
s1 s4 \bar "|."
s1 s4 \bar "|."
s1 s4 s4 \bar "|."
s1 s4 \bar "|."
s1 e,,,4^\markup { 42 } \bar "|."
s1 e,,,4^\markup { 42 } \bar "|."
s1 e,,,4^\markup { 42 } \bar "|."
s1 e,,,4^\markup { 42 } \bar "|."
s1 e,,,4^\markup { 42 } \bar "|."
s1 e,,,4^\markup { 42 } \bar "|."
s1 e,,,4^\markup { 42 } \bar "|."

    }
  }
  >>
  \header {
    piece = "Harmonics by Common Multiple"
  }
}
