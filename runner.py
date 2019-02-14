from optimize import *

if __name__ == '__main__':

    """
    shape_curve = (
        [
            356.43009552,
            -204.98362925,
            -209.00809199,
            208.32247307,
            392.51135997
        ],
        [
            243.90161053,
            552.32736935,
            461.13068339,
            -470.30762604,
            -333.72226511
        ]
    )
    """

    shape_curve = (
        [
            0.000,
            105.709,
            200.000,
            73.086,
            103.923,
            120.000,
            103.923,
            60.000,
            7.347e-15,
            -60.000,
            -103.923,
            -120.000,
            -103.923,
            -73.086,
            -200.000,
            -105.709
        ],
        [
            0.000,
            124.255,
            281.810,
            610.093,
            860.000,
            920.000,
            980.000,
            1023.923,
            1040.000,
            1023.923,
            980.000,
            920.000,
            860.000,
            610.093,
            281.810,
            134.255
        ]
    )

    num_attempts = 2
    num_targets = 1
    num_ratio = 1.067
    base_note = 440
    fit_min = 0.05
    # target = np.array([ num_ratio**-1, 1., num_ratio**1 ])*base_note
    # target = np.array([ 622.26, 783.99, 932.33, 1108.73, 1479.98 ])
    target = np.array([ 311.13, 392.00, 466.16, 554.37, 739.99 ])
    targets = [ target*( 2**( n/12.0 ) ) for n in range(num_targets) ]

    # Set up material/simulation properties
    params = {
        'sheet': {
            'units': 'imperial',
            'material': 'galvanized steel',
            'density': 0.007850,
            'modulus': 200000e6,
            'ratio': 0.3,
            'width': 2,
            'height': 4,
            'gauge': 8
        },
        'simulation': {  # NOTE: values to be filled in from above
            'thickness': 4.27,
            'target': target,  # NOTE: must be an np.array
            'elastic': '200000e6,0.3',
            'density': '0.007850',
            'scale': 800,
            'grade': 'coarse',
            'ctrlpoints': 5,
            'c0': shape_curve
        }
    }

    # Simulation Scope
    bells = []  # hold our output
    for trg in targets:
        i = 0
        while ( i < num_attempts ):
            bell = Bell(**params["simulation"])
            bell.findOptimumCurve()
            bells.append(bell)
            pickle.dump(bells, open('bells.p', 'wb'))
            if ( bell.best_fit < fit_min ):
                break
            else:
                params['simulation']['c0'] = bell.optpts
            i += 1

    # pnts_to_dxf(bell.optpts)
    print("\n\n\n")
    print("="*30)
    print("Final Results: ")
    print(f"Fitness: {bell.best_fq}")
    print("Target FQs: ", end="")
    print(bell.target)
    print("Frequencies: ", end="")
    print(bell.best_fq)
    print("Points: ", end="")
    print(bell.optpts)

    print("\n\n\n")
    print("Geometry to write to DXF: ")
    print(bell.optpts)

